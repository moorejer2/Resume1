from django.db import models
from allauth.account.models import EmailAddress
from allauth.account.signals import user_signed_up, user_logged_in
from datetime import datetime
from inspect import isclass
from django.dispatch import receiver

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, UserManager, PermissionsMixin
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _
from django.core import validators
from django.core.mail import send_mail
import hashlib
import base64
import random
import re

def get_models():
    """
    Iterator for all models

    """
    for obj in globals().values():
        if isclass(obj):
            if issubclass(obj, models.Model) and \
                    not obj is models.Model:
                yield obj


###############################################################################
# Augmented model methods
###############################################################################


__aug_field_names = {'name': 1, 'title': 2}



def get_augmented_fields(model, field_names=__aug_field_names):
    """
    Return a dictionary of extra fields and the values to be assigned
    to them.  Looks for related models with "name" or "title" field.

    returns {"field name": <field value>, ...}

    """
    extra_fields = {}

    def get_subfield(field, subfield_names=[]):
        """
        Retrieve the subfield from a given related field object
        where the subfield name is in the list given

        """
        subfields = [f for f in field._meta.fields
                        if f.name in subfield_names]
        if len(subfields) == 1:
            subfield = subfields[0]
        elif len(subfields) > 1:
            # prioritize subfields in order
            subfield_names = [f.name for f in subfields]
            subfield = subfields[0]
            for f in subfields[1:]:
                if subfield_names[f.name] > \
                        subfield_names[subfield]:
                    subfield = f
        else:
            subfield = None
        return subfield


    for field in model._meta.fields:
        # Find related objects with name field as charfield
        subfield = None
        if isinstance(field, models.ForeignKey):
            field_model = field.rel.to
            subfield = get_subfield(field.rel.to, field_names)
        if subfield is not None:
            if isclass(model):
                new_field_name = "%s__%s" % (field_model.__name__.lower(), subfield.name)
                extra_fields[new_field_name] = None
            else:
                new_field_name = "%s__%s" % (field_model.__name__.lower(), subfield.name)
                submodel = getattr(model, field.name)
                value = getattr(submodel, subfield.name)
                extra_fields[new_field_name] = value
    return extra_fields


def get_augmented_class(model):
    """
    create class for model with extra fields with values from
    name/title fields if they exist.

    """
    name = 'Augmented' + model.__name__
    all_fields = {}
    extra_fields = {}
    for field in model._meta.fields:
        # Add existing fields to model
        if not isinstance(field, models.AutoField) and \
                not isinstance(field, models.ForeignKey):
            #print('adding non-foreign key field %s' % field.__class__.__name__)
            all_fields[field.name] = field
        # Add foreign key objects with name field as charfield
        if isinstance(field, models.ForeignKey):
            field_model = field.rel.to
            #print('adding foreign key field with class %s' % field_model.__name__)
            all_fields[field.name] = models.ForeignKey(field_model)
    # Add augmented fields as charfield
    extra_fields = get_augmented_fields(model)
    for field_name in extra_fields:
        all_fields[field_name] = models.CharField(max_length=255)
    # Specify module of new model class
    all_fields['__module__'] = __name__
    # add the class definition to the module
    aug_class = type(name, (models.Model, ), all_fields)
    globals()[name] = aug_class
    return aug_class


def get_augmented_model(model):
    aug_class = get_augmented_class(model.__class__)
    # instantiate an instance of the class copying values from the given model
    aug_model = aug_class()
    extra_fields = get_augmented_fields(model)
    for field in aug_model._meta.fields:
        #print(field.name)
        if field.name not in extra_fields:
            setattr(aug_model, field.name, getattr(model, field.name))
        else:
            setattr(aug_model, field.name, extra_fields[field.name])
    #print('Retrieving augmented model with name: %s' % aug_class.__name__)
    return aug_model


def get_deaugmented_model(aug_model):
    name = aug_model.__class__.__name__.split('Augmented')[1]
    model_class = globals()[name]
    model = model_class()
    rel = {}
    for field in model._meta.fields:
        #print("%s" % field.name)
        value = getattr(aug_model, field.name)
        if isinstance(field, models.ForeignKey):
            rel[field.name] = value
        setattr(model, field.name, value)
    setattr(model, '_nested_forward_relations', rel)
    return model


###############################################################################
# Model Definitions
###############################################################################


class Address(models.Model):
    """ Postal address """
    is_primary = models.BooleanField(
            db_column='isPrimary', 
            default=False)
    address1 = models.CharField(
            max_length=100, 
            default='',
            db_column='Address1',)
    address2 = models.CharField(
            max_length=100, 
            blank=True,
            null=True, 
            db_column='Address2')
    city = models.CharField(
            max_length=100, 
            default='',
            db_column='City')
    state = models.CharField(
            max_length=2, 
            default='NY',
            db_column='State')
    zip_code = models.CharField(
            max_length=10, 
            blank=True, 
            db_column='Zip')

    def __unicode__(self):
        return self.address1 + ', ' + \
            self.address2 + ', ' + \
            self.city + ', ' + self.state + ' ' + \
            self.zip_code


class Contact(models.Model):
    """ Point of contact person """
    name = models.CharField(max_length=50, default='')
    title = models.CharField(max_length=50, blank=True, default='Mr.')

    def __unicode__(self):
        return self.name


class ContactAddress(models.Model):
    """ Address of a contact """
    contact = models.ForeignKey(Contact, db_column='ContactID')
    address = models.ForeignKey(Address, db_column='AddressID')


class EmailType(models.Model):
    """ Email type (ie: work, personal) """
    name = models.CharField(max_length=15, db_column='Name', default='work')

    def __unicode__(self):
        return self.name

class EmailContact(models.Model):
    emailaddress = models.ForeignKey(EmailAddress)
    email_type = models.ForeignKey(EmailType)
    contact = models.ForeignKey(Contact)
    
    def __unicode__(self):
        return self.emailaddress.email

class PhoneType(models.Model):
    """ Type of phone (ie home, work, cell) """
    name = models.CharField(max_length=10, db_column='Name', default='cell')

    def __unicode__(self):
        return self.name


class PhoneNumber(models.Model):
    """ Phone number with area code """
    phone_number = models.CharField(
            max_length=17,
            db_column='PhoneNumber', 
            default='123-456-7890')
    is_primary = models.BooleanField(db_column='isPrimary', default=False)
    is_active = models.BooleanField(db_column='isActive', default=True)
    phone_type = models.ForeignKey(PhoneType, null=True)

    def __unicode__(self):
        return self.phone_number

    # Need to write a text-field sanitizing method


class ContactPhoneNumber(models.Model):
    """ Phone number associated with a contact """
    phone_number = models.ForeignKey(PhoneNumber, db_column='PhoneNumberID')
    contact = models.ForeignKey(Contact, db_column='ContactID')


class Gender(models.Model):
    """ Enumeration of genders """
    name = models.CharField(max_length=15, db_column='Name', default='Male')
    abbreviation = models.CharField(
            max_length=3,
            #unique=True,
            db_column='Abbreviation',
            default='M', )

    def __unicode__(self):
        return self.name


class Level(models.Model):
    """ Enumeration of competitive levels available """
    name = models.CharField(
            max_length=30, 
            db_column='Name',
            default='Division 1', )
    abbreviation = models.CharField(
            max_length=10,
            db_column='Abbreviation',
            default='AAAAA', )

    def __unicode__(self):
        return self.name


class Sport(models.Model):
    """ Enumeration of sports """
    name = models.CharField(
            max_length=30, 
            db_column='Name', 
            default='Football')
    abbreviation = models.CharField(
            max_length=7, 
            db_column='Abbreviation',
            default='FB')
    high_score_wins = models.BooleanField(
            db_column='HighScoreWins',
            default=True)

    def __unicode__(self):
        return self.name


class Club(models.Model):
    """ Unknown """
    name = models.CharField(
            max_length=50, 
            db_column='Name',
            default='Sample High')
    abbreviation = models.CharField(
            max_length=10,
            db_column='Abbreviation', 
            default='SHS')

    def __unicode__(self):
        return self.name


class EntityType(models.Model):
    """ Description of the entity types """
    name = models.CharField(
            max_length=30, 
            db_column='Name', 
            default='High School')
    #abbreviation =  models.CharField(
    #        max_length=10,
    #        db_column='Abbreviation', 
    #        default='',null=True,blank=True,
    #        )

    def __unicode__(self):
        return self.name


class Entity(models.Model):
    """ Competitive entity information
            (ie a team, school, or independent organization)

    """
    name = models.CharField(max_length=50, db_column='Name', default='')
    color1 = models.CharField(
            max_length=20, 
            blank=True,
            null=True, 
            db_column='Color1')
    color2 = models.CharField(
            max_length=20, 
            blank=True, 
            null=True, 
            db_column='Coler2')
    mascot = models.CharField(
            max_length=30, 
            blank=True, 
            null=True, 
            db_column='Mascot')
    # Put logos in folders based on date to prevent filling up a folder
    today = datetime.now()
    logo = models.FileField(
            blank=True, 
            null=True, 
            upload_to=datetime.now().strftime('logos/%Y/%m/%d'),
            db_column='Logo')
    entity_type = models.ForeignKey(EntityType, db_column='EntityTypeID')
    address = models.ForeignKey(
            Address, 
            blank=True, 
            null=True, 
            db_column='AddressID')
    phone_number = models.ForeignKey(
            PhoneNumber, 
            blank=True, 
            null=True, 
            db_column='PhoneNumberID')

    def __unicode__(self):
        return self.name


class EntityContact(models.Model):
    """ Point of contact associated with an entity """
    entity = models.ForeignKey(Entity, db_column='EntityID')
    contact = models.ForeignKey(Contact, db_column='ContactID')
    is_active = models.BooleanField(db_column='isActive', default=True)


class Student(models.Model):
    """ Representation of a student and all associated personal information """
    first_name = models.CharField(max_length=50, db_column='FName', default='')
    middle_name = models.CharField(
            max_length=50, 
            blank=True,
            null=True, 
            db_column='MName', 
            default='')
    last_name = models.CharField(
            max_length=50, 
            db_column='LName',
            default='')
    suffix = models.CharField(
            max_length=5, 
            blank=True, 
            null=True, 
            db_column='Suffix')
    gender = models.CharField(
            max_length=10, 
            db_column='Gender',
            default='Male')
    graduation_year = models.DecimalField(
            max_digits=4,
            decimal_places=0,
            blank=True,
            null=True,
            db_column='GraduationYear')
    nickname = models.CharField(
            max_length=30,
            blank=True,
            null=True,
            db_column='Nickname')
    dob = models.DateField(db_column='DOB', default=datetime.today().date)
    notes = models.TextField(blank=True, null=True, db_column='Notes')
    ethnicity = models.CharField(
            max_length=30, 
            blank=True,
            null=True, 
            db_column='Ethnicity')
    student_id = models.CharField(
            max_length=30, 
            blank=True,
            null=True, 
            db_column='StudentID')
    entity = models.ForeignKey(Entity,db_column='EntityID')

    def __unicode__(self):
        return '%s, %s %s' % (
                self.last_name, 
                self.first_name, 
                self.middle_name)


class Team(models.Model):
    """ A team related to an entity, school.  Athletes can be associated.

    """
    name = models.CharField(
            max_length=255, 
            db_column='Name', 
			blank=True,
			null=True)
    entity = models.ForeignKey(Entity, blank=True, null=True, db_column='EntityID')
    gender = models.ForeignKey(Gender, db_column='GenderID')
    level = models.ForeignKey(Level, null=True, db_column='LevelID')
    sport = models.ForeignKey(Sport, db_column='SportID')
    team_year = models.DecimalField(max_digits=4, decimal_places=0, null=True, db_column='TeamYear')

    def __unicode__(self):
        return self.name


class Athlete(models.Model):
    """ Representation of a student within a given sport, at a given level, 
    with a given gender 
    """
    first_name = models.CharField(max_length=50, db_column='FName', default='')
    middle_initial = models.CharField(max_length=2, blank=True, null=True, db_column='MInit', default='')
    last_name = models.CharField(max_length=50, db_column='LName', default='')
    entity = models.ForeignKey(Entity,db_column='EntityID')
    level = models.ForeignKey(Level, db_column='LevelID')
    position = models.CharField(max_length=15, db_column='PPos', default='')
    gender = models.CharField(max_length=7)
    graduation_year = models.DecimalField(max_digits=4, decimal_places=0, db_column='GraduationYear')
    jersey_num = models.DecimalField(max_digits=4, decimal_places=0, db_column='HomeJerseyNum')
    height_feet = models.DecimalField(max_digits=1, decimal_places=0, blank=True, null=True, db_column='HeightF')
    height_inch = models.DecimalField(max_digits=2, decimal_places=0, blank=True, null=True, db_column='HeightI')
    weight = models.DecimalField(max_digits=3, decimal_places=0, blank=True, null=True, db_column='Weight')
    is_starter = models.BooleanField(db_column='isStarter', default=False)

    def __unicode__(self):
        return '%s, %s %s' % (
                self.last_name, 
                self.first_name, 
                self.middle_initial)
 

class Facility(models.Model):
    """ A physical building, venue, stadium, etc where
        an event can be held

    """
    name = models.CharField(
            max_length=50, 
            db_column='Name',
            default='')
    # Put logos in folders based on date to prevent filling up a folder
    today = datetime.now()
    image = models.FileField(
            blank=True, 
            null=True,
            upload_to=today.strftime('logos/%Y/%m/%d'),
            db_column='Image')
    directions = models.TextField(
            blank=True, 
            null=True, 
            db_column='Directions')
    entity = models.ForeignKey(
            Entity, 
            blank=True,
            null=True, 
            db_column='EntityID')
    contact = models.ManyToManyField(
            Contact, 
            blank=True,
            null=True, 
            db_column='ContactID')

    def __unicode__(self):
        return self.name


class Transportation(models.Model):
    """ Transportation contacts """
    name = models.CharField(max_length=50, db_column='Name', default='')
    description = models.TextField(blank=True, db_column='Description')
    contact = models.ForeignKey(Contact, db_column='ContactID')

    def __unicode__(self):
        return self.name


class EventStatus(models.Model):
    """ Current status of event """
    name = models.CharField(max_length=15, db_column='Name', default='Pending')

    def __unicode__(self):
        return self.name


class EventType(models.Model):
    """ Enumeration of type of events """
    name = models.CharField(
            max_length=20, 
            db_column='Name', 
            default='Conference Game')

    def __unicode__(self):
        return self.name


class Event(models.Model):
    """ A competitive event
            (eg: a game, a race, or a tournament)

    """
    title = models.CharField(
            max_length=255, 
            db_column='Title', 
			blank=True,
			null=True)
    is_conference = models.BooleanField(
            db_column='isConference',
            default=False)
    date = models.DateField(blank=True, null=True, db_column='Date')
    date_tba = models.BooleanField(db_column='DateTBA', default=True)
    start_time = models.TimeField(blank=True, null=True, db_column='StartTime')
    time_tba = models.BooleanField(db_column='TimeTBA', default=True)
    end_time = models.TimeField(blank=True, null=True, db_column='EndTime')
    gender = models.ForeignKey(Gender, db_column='GenderID')
    level = models.ForeignKey(Level, null=True, db_column='LevelID')
    sport = models.ForeignKey(Sport, db_column='SportID')
    facility = models.CharField(max_length=255, blank=True, null=True)
    event_type = models.ForeignKey(
            EventType, 
            null=True, 
            blank=True, 
            db_column='EventTypeID')
    event_status = models.ForeignKey(EventStatus, db_column='EventStatusID')

    def __unicode__(self):
        return self.title


class EventParticipant(models.Model):
    """ A participant entry into an event """
    is_host = models.BooleanField(db_column='isHost', default=False)
    has_accepted = models.BooleanField(db_column='hasAccepted', default=True)
    event = models.ForeignKey(Event, db_column='EventID')
    entity = models.ForeignKey(Entity, blank=True, null=True, db_column='EntityID')
    is_tba = models.BooleanField(db_column='isTBA', default=True)


class EventInformation(models.Model):
    """ Information relating to an event """
    title = models.CharField(
            max_length=255, 
            db_column='Title',
            default='Homecoming')
    trans_dismiss = models.DateTimeField(
            null=True, 
            blank=True,
            db_column='TransDismiss')
    trans_return = models.DateTimeField(
            null=True, 
            blank=True,
            db_column='TransReturn')
    dismissal_time = models.DateTimeField(
            null=True, 
            blank=True,
            db_column='DismissalTime')
    report_time = models.DateTimeField(
            null=True, 
            blank=True,
            db_column='ReportTime')
    event = models.ForeignKey(Event, db_column='EventID')
    entity = models.ForeignKey(Entity, db_column='EntityID')
    transportation = models.ManyToManyField(Transportation, null=True,
                                            db_column='TransportationID')

    def __unicode__(self):
        return self.title


class Score(models.Model):
    """ Score entry for an event """
    score = models.DecimalField(
            decimal_places=0, 
            max_digits=4,
            db_column='Score', 
            default=0)
    breakdown = models.CharField(
            max_length=20, 
            db_column='Breakdown',
            default='Quarter')
    event = models.ForeignKey(Event, db_column='EventID')
    eventparticipant = models.ForeignKey(EventParticipant)
    # Add optional athlete relation

    def __unicode__(self):
        return unicode(self.score)


class ScoreBreakdown(models.Model):
    """ Subscores for a given score, when sumed yields the links scores
        (eg: quarters, innings, etc)

    """
    subscore = models.DecimalField(
            decimal_places=0, 
            max_digits=4,
            db_column='Score', 
            default=0)
    breakdown = models.CharField(
            max_length=20, 
            db_column='Breakdown',
            default='Quarter')
    score = models.ForeignKey(Score, db_column='ScoreID')

class StatisticTypeCategory(models.Model):
    """ Category of statistic type. """
    name = models.CharField(max_length=30, db_column='Name')

    def __unicode__(self):
        return self.name

class StatisticType(models.Model):
    """ Category of statistic, usually can be applied across various sports """
    name = models.CharField(max_length=30, db_column='Name')
    abbrev = models.CharField(max_length=30)
    category = models.ForeignKey(StatisticTypeCategory)
    sport = models.ForeignKey(Sport)

    def __unicode__(self):
        return self.name


class Statistic(models.Model):
    """ Calculated statistic """
    event = models.ForeignKey(
            Event, 
            blank=True, 
            null=True, 
            db_column='EventID')
    athlete = models.ForeignKey(
            Athlete, 
            blank=True, 
            null=True, 
            db_column='AthleteID')
    statistic_type = models.ForeignKey(
            StatisticType, 
            db_column='StatisticTypeID')
    value = models.DecimalField(
            decimal_places=15, 
            max_digits=25, 
            db_column='Value', 
            default=0)

    def __unicode__(self):
        return unicode(self.value)

class EventTeamStatistic(models.Model):
    """ Calculated statistic """
    eventparticipant = models.ForeignKey(EventParticipant)
    misc_touchbacks = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    misc_passes_defended = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    misc_fumbles = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    misc_fumbles_lost = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    misc_offensive_first_downs = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    misc_passing_yards_allowed = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    misc_rushing_yards_allowed = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    misc_penalties = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    misc_penalty_yards = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    misc_receiving = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    """_-receiving_-    """



class EventAthleteStatistic(models.Model):
    """ Calculated statistic """
    eventparticipant = models.ForeignKey(EventParticipant)
    athlete = models.ForeignKey(Athlete)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    jersey_num = models.CharField(max_length=5)
    position = models.CharField(max_length=50)
    start = models.BooleanField(default=False)
    misc_touchbacks = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    misc_passes_defended = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    misc_fumbles = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    misc_fumbles_lost = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    misc_offensive_first_downs = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    misc_passing_yards_allowed = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    misc_rushing_yards_allowed = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    misc_penalties = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    misc_penalty_yards = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    misc_receiving = models.DecimalField(decimal_places=15, max_digits=25, blank=True, null=True, default=0)
    """_-receiving_-    """



def getTypesData():
    data = {}
    data['entities'] =  [{'id': x.id, 'name': x.name} for x in EntityType.objects.all()] 
    data['genders'] = [{'id': x.id, 'name': x.name,
                                  'abbreviation': x.abbreviation} for x in Gender.objects.all()]
    data['levels'] =  [{'id': x.id, 'name': x.name,
                             'abbreviation': x.abbreviation} for x in Level.objects.all()]
    data['phones'] = [{'id': x.id, 'name': x.name,
                              } for x in PhoneType.objects.all()]
    data['emails'] =[{'id': x.id, 'name': x.name,
                              } for x in EmailType.objects.all()]
    data['sports']=[{'id': x.id, 'name': x.name,
                              'abbreviation': x.abbreviation} for x in Sport.objects.all()]
    data['events']=[{'id': x.id, 'name': x.name,
                              } for x in EventType.objects.all()]
    data['statistics']=[{'id': x.id, 'name': x.name, 'code': x.code,
                                  } for x in StatisticType.objects.all()]
    return data


class Market(models.Model):
    name = models.CharField(max_length=100)
    
    def core_events(self):
        return Event.objects.filter(eventinformation__entity__in=self.entities.filter(type='core'))
                                    
    def covered_events(self):
        return Event.objects.filter(eventinformation__entity__in=self.entities.filter(type='covered'))

    def __unicode__(self):
        return self.name

class MarketEntity(models.Model):
    market = models.ForeignKey(Market,related_name='entities')
    type = models.CharField(choices = (('core', 'Core'),('covered','Covered')), max_length=20)
    entity = models.ForeignKey(Entity)



## Custom user class implemention
class AccountType(models.Model):
    codename = models.SlugField(max_length=30)
    name = models.CharField(max_length=50)

    def __unicode__(self):
        return self.name

class Account(models.Model):
    type = models.ForeignKey(AccountType)
    name = models.CharField(max_length=100)
    

class Group(models.Model):
    account = models.ForeignKey(Account)
    codename = models.SlugField(max_length=30,unique=True)
    name = models.CharField(max_length=30)
    is_active = models.BooleanField(default=True)

    def __unicode__(self):
        return self.name

class Roles(models.Model):
    codename = models.SlugField(max_length=30)
    name = models.CharField(max_length=50)

    def __unicode__(self):
        return self.name

class PermsMixin(models.Model):    
    groups = models.ManyToManyField(Group)
    roles = models.ManyToManyField(Roles)

    class Meta:
        abstract = True

    def has_perm(self, perm, obj=None):

        # Active superusers have all permissions.
        if self.is_active and self.is_superuser:
            return True

        # Otherwise we need to check the backends.
        return _user_has_perm(self, perm, obj)


    def has_perms(self, perm_list, obj=None):
     
        for perm in perm_list:
            if not self.has_perm(perm, obj):
                return False
        return True

    def has_module_perms(self,pkg):
        ### Just as a placeholder for now
        return True

class ThisUserManager(UserManager):

    def create_user(self, email, password=None, username=None, **extra_fields):
        if not email:
            raise ValueError('Email is required')
        if not username:
            username = email
        now=timezone.now()
        email = UserManager.normalize_email(email)
        user = self.model(username=username, email=email,
                          is_staff=False, is_active=True, is_superuser=False,
                          last_login=now, date_joined=now, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **extra_fields):
        u = self.create_user(email, password, **extra_fields)
        u.is_staff = True
        u.is_active = True
        u.is_superuser = True
        u.save(using=self._db)
        return u

    
class User(AbstractBaseUser, PermsMixin):
   
    username = models.CharField(_('username'), max_length=100, unique=True,
        help_text=_('Required. 100 characters or fewer. Letters, numbers and '
                    '@/./+/-/_ characters'),
        validators=[
            validators.RegexValidator(re.compile('^[\w\d.@+-]+$'), _('Enter a valid username.'), 'invalid')
        ])
    first_name = models.CharField(_('first name'), max_length=50, blank=True)
    last_name = models.CharField(_('last name'), max_length=50, blank=True)
    gender = models.CharField(_('gender'), max_length=7, blank=True)
    dob = models.DateField(_('dob'),blank=True, null=True)
    acct_type = models.CharField(_('acct_type'), max_length=7, blank=True)
    email = models.EmailField(_('email address'), unique=True)
    is_staff = models.BooleanField(_('staff status'), default=False,
        help_text=_('Designates whether the user can log into this admin '
                    'site.'))
    is_active = models.BooleanField(_('active'), default=True,
        help_text=_('Designates whether this user should be treated as '
                    'active. Unselect this instead of deleting accounts.'))
    date_joined = models.DateTimeField(_('date joined'), default=timezone.now)
    is_superuser = models.BooleanField(default=False)
    objects = ThisUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')

    def get_absolute_url(self):
        return "/users/%s/" % urlquote(self.username)

    def get_full_name(self):
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()

    def get_short_name(self):
        return self.first_name

    def email_user(self, subject, message, from_email=None):
        send_mail(subject, message, from_email, [self.email])

    def _make_auth_token(self):
        return self.email + ':' + base64.urlsafe_b64encode(hashlib.sha224("%s %s %s" % (self.email, str(timezone.now()), str(random.randint(1,9999999999)))).digest())

    def new_auth_token(self):
        return self._make_auth_token()

    def get_session_key(self):
        return base64.urlsafe_b64encode(hashlib.sha224(str(random.randint(1,9999999999999)) + str(random.randint(1,9999999999999))).digest())

class UserAccount(models.Model):
    user = models.ForeignKey(User)
    account = models.ForeignKey(Account)
    
    class Meta:
        unique_together = (('user','account'),)

