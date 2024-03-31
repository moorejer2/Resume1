from stat_db import models
from allauth.account.models import EmailAddress
from rest_framework import serializers
from rest_framework import fields


class AddressSerial(serializers.ModelSerializer):
    
    class Meta:
        model = models.Address

class PhoneNumberSerial(serializers.ModelSerializer):
    phone_type_name = serializers.CharField(source='phone_type.name',read_only=True)

    class Meta:
        model = models.PhoneNumber


class EntitySerial(serializers.ModelSerializer):
    entity_type_name = serializers.CharField(source='entity_type.name', read_only=True)
    address_data = AddressSerial(source='address', read_only=True)
    phone_number_data = PhoneNumberSerial(source='phone_number',read_only=True)

    class Meta:
        model = models.Entity

class ContactSerial(serializers.ModelSerializer):
    
    class Meta:
        model = models.Contact

class ContactAddressSerial(serializers.ModelSerializer):
    contact_data = ContactSerial(source='contact', read_only=True)
    address_data = AddressSerial(source='address', read_only=True)

    class Meta:
        model = models.ContactAddress

class EmailAddressSerial(serializers.ModelSerializer):

    class Meta:
        model = EmailAddress

class EmailContactSerial(serializers.ModelSerializer):
    email_type_name = serializers.CharField(source='email_type.name',read_only=True)
    emailaddress_data = EmailAddressSerial(source='emailaddress',read_only=True)
    
    class Meta:
        model = models.EmailContact

class ContactPhoneNumberSerial(serializers.ModelSerializer):
    phone_number_data = PhoneNumberSerial(source='phone_number', read_only=True)
    contact_data = ContactSerial(source='contact')

    class Meta:
        model = models.ContactPhoneNumber

class GenderSerial(serializers.ModelSerializer):
    
    class Meta:
        model = models.Gender

class LevelSerial(serializers.ModelSerializer):
    
    class Meta:
        model = models.Level

class SportSerial(serializers.ModelSerializer):
    
    class Meta:
        model = models.Sport

class ClubSerial(serializers.ModelSerializer):
    
    class Meta:
        model = models.Club


class EntityContactSerial(serializers.ModelSerializer):
    contact_data = ContactSerial(source='contact',read_only=True)

    class Meta:
        model = models.EntityContact


class StudentSerial(serializers.ModelSerializer):
    
    class Meta:
        model = models.Student

class AthleteSerial(serializers.ModelSerializer):

    class Meta:
        model = models.Athlete

class FacilitySerial(serializers.ModelSerializer):
    entity_data = EntitySerial(source='entity', read_only=True)
    
    class Meta:
        model = models.Facility

class TransportationSerial(serializers.ModelSerializer):
    contact_data = ContactSerial(source='contact')

    class Meta:
        model = models.Transportation

class EventStatusSerial(serializers.ModelSerializer):
    
    class Meta:
        model = models.EventStatus

class EventTypeSerial(serializers.ModelSerializer):
    
    class Meta:
        model = models.EventType

class EventParticipantFlatSerial(serializers.ModelSerializer):
    entity_name = serializers.CharField(source='entity.name', read_only=True)
    
    class Meta:
        model = models.EventParticipant

class ScoreFlatSerial(serializers.ModelSerializer):
   
    class Meta:
        model = models.Score

class EventParticipantScoreSerial(serializers.ModelSerializer):
    scores = ScoreFlatSerial(source='score_set',read_only=True,many=True)
    entity_name = serializers.CharField(source='entity.name', read_only=True)
    class Meta:
        model = models.EventParticipant


class EventTeamStatisticSerial(serializers.ModelSerializer):

    class Meta:
        model = models.EventTeamStatistic

class EventAthleteStatisticSerial(serializers.ModelSerializer):

    class Meta:
        model = models.EventAthleteStatistic

class EventFullSerial(serializers.ModelSerializer):
    event_type_name = serializers.CharField(source='event_type.name', read_only=True)
    event_status_name = serializers.CharField(source='event_status.name', read_only=True)

    level_data = LevelSerial(source='level', read_only=True)
    sport_data = SportSerial(source='sport', read_only=True)

    gender_data =  GenderSerial(source='gender',read_only=True)
    participants = EventParticipantScoreSerial(many=True,source='eventparticipant_set',read_only=True)

    class Meta:
        model = models.Event


class EventSerial(serializers.ModelSerializer):
    event_type_name = serializers.CharField(source='event_type.name', read_only=True)
    event_status_name = serializers.CharField(source='event_status.name', read_only=True)

    level_name = serializers.CharField(source='level.name', read_only=True)
    sport_name = serializers.CharField(source='sport.name', read_only=True)

    gender_data = GenderSerial(source='gender',read_only=True)
    

    class Meta:
        model = models.Event

class EventParticipantSerial(serializers.ModelSerializer):
    event_data = EventSerial(source='event',read_only=True)
    entity_data = EntitySerial(source='entity',read_only=True)

    class Meta:
        model = models.EventParticipant

class EventInformationSerial(serializers.ModelSerializer):
    event_data = EventSerial(source='event',read_only=True)
    entity_data = EntitySerial(source='entity',read_only=True)

    class Meta:
        model = models.EventInformation


class ScoreSerial(serializers.ModelSerializer):
    event_data = EventSerial(source='event',read_only=True)

    class Meta:
        model = models.Score

class ScoreBreakdownSerial(serializers.ModelSerializer):
    
    class Meta:
        model = models.ScoreBreakdown

class StatisticTypeCategorySerial(serializers.ModelSerializer):
    
    class Meta:
        model = models.StatisticTypeCategory

class StatisticTypeSerial(serializers.ModelSerializer):
    
    class Meta:
        model = models.StatisticType

class StatisticSerial(serializers.ModelSerializer):
    event_title = serializers.CharField(source='event.title',read_only=True)
    entity_name = serializers.CharField(source='entity.name',read_only=True)
    athlete = serializers.CharField(source='athlete.student.__unicode__',read_only=True)
    statistic_type_name = serializers.CharField(source='statistictype.name',read_only=True)

    class Meta:
        model = models.Statistic

class TeamSerial(serializers.ModelSerializer):
    gender_data = GenderSerial(source='gender', read_only=True)
    level_data = LevelSerial(source='level',read_only=True)
    entity_data = EntitySerial(source='entity', read_only=True)
    sport_data = SportSerial(source='sport', read_only=True)

    class Meta:
        model = models.Team

class CompoundSerializer(serializers.Serializer):
    pass
   

class TypesSerial2(serializers.Serializer):
    events = EventTypeSerial(read_only=True)
    stats = StatisticTypeSerial(read_only=True)
    

class CreateUserSerial(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
    password2 = serializers.CharField()

    def validate(self,attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError("Passwords do not match")
        if len(attrs['password']) < 4:
            raise serializers.ValidationError("Password not long enough")
        return attrs


class UserSerial(serializers.ModelSerializer):
    
    class Meta:
        model = models.User
        exclude = ('password',)

class MarketEntitySerial(serializers.ModelSerializer):
    
    class Meta:
        model = models.MarketEntity

class MarketSerial(serializers.ModelSerializer):
    core_events = EventFullSerial(source='core_events',read_only=True)
    covered_events = EventFullSerial(source='covered_events',read_only=True)
    #entities = serializers.PrimaryKeyRelatedField(many=True)
    entities = MarketEntitySerial(many=True)
    class Meta:
        model = models.Market
        depth = 1

        
