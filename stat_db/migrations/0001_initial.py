# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Address'
        db.create_table(u'stat_db_address', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('is_primary', self.gf('django.db.models.fields.BooleanField')(default=False, db_column='isPrimary')),
            ('address1', self.gf('django.db.models.fields.CharField')(default='', max_length=100, db_column='Address1')),
            ('address2', self.gf('django.db.models.fields.CharField')(max_length=100, null=True, db_column='Address2', blank=True)),
            ('city', self.gf('django.db.models.fields.CharField')(default='', max_length=100, db_column='City')),
            ('state', self.gf('django.db.models.fields.CharField')(default='NY', max_length=2, db_column='State')),
            ('zip_code', self.gf('django.db.models.fields.CharField')(max_length=10, db_column='Zip', blank=True)),
        ))
        db.send_create_signal(u'stat_db', ['Address'])

        # Adding model 'Contact'
        db.create_table(u'stat_db_contact', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(default='', max_length=50)),
            ('title', self.gf('django.db.models.fields.CharField')(default='Mr.', max_length=50, blank=True)),
        ))
        db.send_create_signal(u'stat_db', ['Contact'])

        # Adding model 'ContactAddress'
        db.create_table(u'stat_db_contactaddress', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('contact', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Contact'], db_column='ContactID')),
            ('address', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Address'], db_column='AddressID')),
        ))
        db.send_create_signal(u'stat_db', ['ContactAddress'])

        # Adding model 'EmailType'
        db.create_table(u'stat_db_emailtype', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(default='work', max_length=15, db_column='Name')),
        ))
        db.send_create_signal(u'stat_db', ['EmailType'])

        # Adding model 'EmailAddress'
        db.create_table(u'stat_db_emailaddress', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('email', self.gf('django.db.models.fields.EmailField')(default='test@test.com', max_length=255, db_column='Email')),
            ('is_primary', self.gf('django.db.models.fields.BooleanField')(default=False, db_column='isPrimary')),
            ('is_active', self.gf('django.db.models.fields.BooleanField')(default=True, db_column='isActive')),
            ('email_type', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.EmailType'], null=True, db_column='EmailTypeID')),
            ('contact', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Contact'], db_column='ContactID')),
        ))
        db.send_create_signal(u'stat_db', ['EmailAddress'])

        # Adding model 'PhoneType'
        db.create_table(u'stat_db_phonetype', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(default='cell', max_length=10, db_column='Name')),
        ))
        db.send_create_signal(u'stat_db', ['PhoneType'])

        # Adding model 'PhoneNumber'
        db.create_table(u'stat_db_phonenumber', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('phone_number', self.gf('django.db.models.fields.CharField')(default='123-456-7890', max_length=17, db_column='PhoneNumber')),
            ('is_primary', self.gf('django.db.models.fields.BooleanField')(default=False, db_column='isPrimary')),
            ('is_active', self.gf('django.db.models.fields.BooleanField')(default=True, db_column='isActive')),
            ('phone_type', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.PhoneType'], null=True)),
        ))
        db.send_create_signal(u'stat_db', ['PhoneNumber'])

        # Adding model 'ContactPhoneNumber'
        db.create_table(u'stat_db_contactphonenumber', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('phone_number', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.PhoneNumber'], db_column='PhoneNumberID')),
            ('contact', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Contact'], db_column='ContactID')),
        ))
        db.send_create_signal(u'stat_db', ['ContactPhoneNumber'])

        # Adding model 'Gender'
        db.create_table(u'stat_db_gender', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(default='Male', max_length=15, db_column='Name')),
            ('abbreviation', self.gf('django.db.models.fields.CharField')(default='M', max_length=3, db_column='Abbreviation')),
        ))
        db.send_create_signal(u'stat_db', ['Gender'])

        # Adding model 'Level'
        db.create_table(u'stat_db_level', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(default='Division 1', max_length=30, db_column='Name')),
            ('abbreviation', self.gf('django.db.models.fields.CharField')(default='AAAAA', max_length=10, db_column='Abbreviation')),
        ))
        db.send_create_signal(u'stat_db', ['Level'])

        # Adding model 'Sport'
        db.create_table(u'stat_db_sport', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(default='Football', max_length=30, db_column='Name')),
            ('abbreviation', self.gf('django.db.models.fields.CharField')(default='FB', max_length=7, db_column='Abbreviation')),
            ('high_score_wins', self.gf('django.db.models.fields.BooleanField')(default=True, db_column='HighScoreWins')),
        ))
        db.send_create_signal(u'stat_db', ['Sport'])

        # Adding model 'Club'
        db.create_table(u'stat_db_club', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(default='Sample High', max_length=50, db_column='Name')),
            ('abbreviation', self.gf('django.db.models.fields.CharField')(default='SHS', max_length=10, db_column='Abbreviation')),
        ))
        db.send_create_signal(u'stat_db', ['Club'])

        # Adding model 'EntityType'
        db.create_table('EntityType', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(default='High School', max_length=30, db_column='Name')),
        ))
        db.send_create_signal(u'stat_db', ['EntityType'])

        # Adding model 'Entity'
        db.create_table(u'stat_db_entity', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(default='', max_length=50, db_column='Name')),
            ('color1', self.gf('django.db.models.fields.CharField')(max_length=20, null=True, db_column='Color1', blank=True)),
            ('color2', self.gf('django.db.models.fields.CharField')(max_length=20, null=True, db_column='Coler2', blank=True)),
            ('mascot', self.gf('django.db.models.fields.CharField')(max_length=30, null=True, db_column='Mascot', blank=True)),
            ('logo', self.gf('django.db.models.fields.files.FileField')(max_length=100, null=True, db_column='Logo', blank=True)),
            ('entity_type', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.EntityType'], db_column='EntityTypeID')),
            ('address', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Address'], null=True, db_column='AddressID', blank=True)),
            ('phone_number', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.PhoneNumber'], null=True, db_column='PhoneNumberID', blank=True)),
        ))
        db.send_create_signal(u'stat_db', ['Entity'])

        # Adding model 'EntityContact'
        db.create_table(u'stat_db_entitycontact', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('entity', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Entity'], db_column='EntityID')),
            ('contact', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Contact'], db_column='ContactID')),
            ('is_active', self.gf('django.db.models.fields.BooleanField')(default=True, db_column='isActive')),
        ))
        db.send_create_signal(u'stat_db', ['EntityContact'])

        # Adding model 'Student'
        db.create_table(u'stat_db_student', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('first_name', self.gf('django.db.models.fields.CharField')(default='', max_length=50, db_column='FName')),
            ('middle_name', self.gf('django.db.models.fields.CharField')(default='', max_length=50, null=True, db_column='MName', blank=True)),
            ('last_name', self.gf('django.db.models.fields.CharField')(default='', max_length=50, db_column='LName')),
            ('suffix', self.gf('django.db.models.fields.CharField')(max_length=5, null=True, db_column='Suffix', blank=True)),
            ('gender', self.gf('django.db.models.fields.CharField')(default='Male', max_length=10, db_column='Gender')),
            ('graduation_year', self.gf('django.db.models.fields.DecimalField')(blank=True, null=True, db_column='GraduationYear', decimal_places=0, max_digits=4)),
            ('nickname', self.gf('django.db.models.fields.CharField')(max_length=30, null=True, db_column='Nickname', blank=True)),
            ('dob', self.gf('django.db.models.fields.DateField')(default=datetime.datetime(2013, 6, 14, 0, 0), db_column='DOB')),
            ('notes', self.gf('django.db.models.fields.TextField')(null=True, db_column='Notes', blank=True)),
            ('ethnicity', self.gf('django.db.models.fields.CharField')(max_length=30, null=True, db_column='Ethnicity', blank=True)),
            ('student_id', self.gf('django.db.models.fields.CharField')(max_length=30, null=True, db_column='StudentID', blank=True)),
        ))
        db.send_create_signal(u'stat_db', ['Student'])

        # Adding model 'Athlete'
        db.create_table(u'stat_db_athlete', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('student', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Student'], db_column='StudentID')),
            ('gender', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Gender'], db_column='GenderID')),
            ('level', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Level'], db_column='LevelID')),
            ('sport', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Sport'], db_column='SportID')),
            ('year', self.gf('django.db.models.fields.DecimalField')(blank=True, null=True, db_column='Year', decimal_places=0, max_digits=4)),
            ('home_jersey_num', self.gf('django.db.models.fields.DecimalField')(blank=True, null=True, db_column='HomeJerseyNum', decimal_places=0, max_digits=3)),
            ('away_jersey_num', self.gf('django.db.models.fields.DecimalField')(blank=True, null=True, db_column='AwayJerseyNum', decimal_places=0, max_digits=3)),
            ('height', self.gf('django.db.models.fields.CharField')(max_length=10, null=True, db_column='Height', blank=True)),
            ('weight', self.gf('django.db.models.fields.CharField')(max_length=10, null=True, db_column='Weight', blank=True)),
            ('practice_jersey_num', self.gf('django.db.models.fields.DecimalField')(blank=True, null=True, db_column='PracticeJerseyNum', decimal_places=0, max_digits=3)),
        ))
        db.send_create_signal(u'stat_db', ['Athlete'])

        # Adding model 'Facility'
        db.create_table(u'stat_db_facility', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(default='', max_length=50, db_column='Name')),
            ('image', self.gf('django.db.models.fields.files.FileField')(max_length=100, null=True, db_column='Image', blank=True)),
            ('directions', self.gf('django.db.models.fields.TextField')(null=True, db_column='Directions', blank=True)),
            ('entity', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Entity'], null=True, db_column='EntityID', blank=True)),
        ))
        db.send_create_signal(u'stat_db', ['Facility'])

        # Adding M2M table for field contact on 'Facility'
        db.create_table(u'stat_db_facility_contact', (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('facility', models.ForeignKey(orm[u'stat_db.facility'], null=False)),
            ('contact', models.ForeignKey(orm[u'stat_db.contact'], null=False))
        ))
        db.create_unique(u'stat_db_facility_contact', ['facility_id', 'contact_id'])

        # Adding model 'Transportation'
        db.create_table(u'stat_db_transportation', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(default='', max_length=50, db_column='Name')),
            ('description', self.gf('django.db.models.fields.TextField')(db_column='Description', blank=True)),
            ('contact', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Contact'], db_column='ContactID')),
        ))
        db.send_create_signal(u'stat_db', ['Transportation'])

        # Adding model 'EventStatus'
        db.create_table(u'stat_db_eventstatus', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(default='Pending', max_length=15, db_column='Name')),
        ))
        db.send_create_signal(u'stat_db', ['EventStatus'])

        # Adding model 'EventType'
        db.create_table(u'stat_db_eventtype', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(default='Conference Game', max_length=20, db_column='Name')),
        ))
        db.send_create_signal(u'stat_db', ['EventType'])

        # Adding model 'Event'
        db.create_table(u'stat_db_event', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('title', self.gf('django.db.models.fields.CharField')(default='Homecoming', max_length=255, db_column='Title')),
            ('is_conference', self.gf('django.db.models.fields.BooleanField')(default=True, db_column='isConference')),
            ('date', self.gf('django.db.models.fields.DateField')(null=True, db_column='Date', blank=True)),
            ('time', self.gf('django.db.models.fields.TimeField')(null=True, db_column='Time', blank=True)),
            ('entity', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Entity'], db_column='EntityID')),
            ('gender', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Gender'], db_column='GenderID')),
            ('level', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Level'], null=True, db_column='LevelID')),
            ('sport', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Sport'], db_column='SportID')),
            ('club', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Club'], null=True, db_column='ClubID', blank=True)),
            ('facility', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Facility'], null=True, db_column='FacilityID')),
            ('event_type', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.EventType'], null=True, db_column='EventTypeID', blank=True)),
            ('event_status', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.EventStatus'], db_column='EventStatusID')),
        ))
        db.send_create_signal(u'stat_db', ['Event'])

        # Adding model 'EventParticipant'
        db.create_table(u'stat_db_eventparticipant', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('is_host', self.gf('django.db.models.fields.BooleanField')(default=False, db_column='isHost')),
            ('has_accepted', self.gf('django.db.models.fields.BooleanField')(default=True, db_column='hasAccepted')),
            ('event', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Event'], db_column='EventID')),
            ('entity', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Entity'], db_column='EntityID')),
        ))
        db.send_create_signal(u'stat_db', ['EventParticipant'])

        # Adding unique constraint on 'EventParticipant', fields ['event', 'entity']
        db.create_unique(u'stat_db_eventparticipant', ['EventID', 'EntityID'])

        # Adding model 'EventInformation'
        db.create_table(u'stat_db_eventinformation', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('title', self.gf('django.db.models.fields.CharField')(default='Homecoming', max_length=255, db_column='Title')),
            ('trans_dismiss', self.gf('django.db.models.fields.DateTimeField')(null=True, db_column='TransDismiss', blank=True)),
            ('trans_return', self.gf('django.db.models.fields.DateTimeField')(null=True, db_column='TransReturn', blank=True)),
            ('dismissal_time', self.gf('django.db.models.fields.DateTimeField')(null=True, db_column='DismissalTime', blank=True)),
            ('report_time', self.gf('django.db.models.fields.DateTimeField')(null=True, db_column='ReportTime', blank=True)),
            ('event', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Event'], db_column='EventID')),
            ('entity', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Entity'], db_column='EntityID')),
        ))
        db.send_create_signal(u'stat_db', ['EventInformation'])

        # Adding M2M table for field transportation on 'EventInformation'
        db.create_table(u'stat_db_eventinformation_transportation', (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('eventinformation', models.ForeignKey(orm[u'stat_db.eventinformation'], null=False)),
            ('transportation', models.ForeignKey(orm[u'stat_db.transportation'], null=False))
        ))
        db.create_unique(u'stat_db_eventinformation_transportation', ['eventinformation_id', 'transportation_id'])

        # Adding model 'Score'
        db.create_table(u'stat_db_score', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('score', self.gf('django.db.models.fields.DecimalField')(default=0, db_column='Score', decimal_places=0, max_digits=4)),
            ('creator_entity', self.gf('django.db.models.fields.related.ForeignKey')(related_name='creator_score_set', null=True, db_column='CreatorEntityID', to=orm['stat_db.Entity'])),
            ('event', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Event'], db_column='EventID')),
            ('entity', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Entity'], null=True, db_column='EntityID')),
        ))
        db.send_create_signal(u'stat_db', ['Score'])

        # Adding model 'ScoreBreakdown'
        db.create_table(u'stat_db_scorebreakdown', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('subscore', self.gf('django.db.models.fields.DecimalField')(default=0, db_column='Score', decimal_places=0, max_digits=4)),
            ('breakdown', self.gf('django.db.models.fields.CharField')(default='Quarter', max_length=20, db_column='Breakdown')),
            ('score', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Score'], db_column='ScoreID')),
        ))
        db.send_create_signal(u'stat_db', ['ScoreBreakdown'])

        # Adding model 'StatisticType'
        db.create_table(u'stat_db_statistictype', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=30, db_column='Name')),
            ('code', self.gf('django.db.models.fields.DecimalField')(default=0, db_column='Code', decimal_places=0, max_digits=10)),
        ))
        db.send_create_signal(u'stat_db', ['StatisticType'])

        # Adding model 'Statistic'
        db.create_table(u'stat_db_statistic', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('event', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Event'], null=True, db_column='EventID', blank=True)),
            ('creator_entity', self.gf('django.db.models.fields.related.ForeignKey')(blank=True, related_name='creator_statistic_set', null=True, db_column='CreatorEntityID', to=orm['stat_db.Entity'])),
            ('entity', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Entity'], null=True, db_column='EntityID', blank=True)),
            ('athlete', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.Athlete'], null=True, db_column='AthleteID', blank=True)),
            ('statistic_type', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['stat_db.StatisticType'], db_column='StatisticTypeID')),
            ('value', self.gf('django.db.models.fields.DecimalField')(default=0, db_column='Value', decimal_places=15, max_digits=25)),
        ))
        db.send_create_signal(u'stat_db', ['Statistic'])


    def backwards(self, orm):
        # Removing unique constraint on 'EventParticipant', fields ['event', 'entity']
        db.delete_unique(u'stat_db_eventparticipant', ['EventID', 'EntityID'])

        # Deleting model 'Address'
        db.delete_table(u'stat_db_address')

        # Deleting model 'Contact'
        db.delete_table(u'stat_db_contact')

        # Deleting model 'ContactAddress'
        db.delete_table(u'stat_db_contactaddress')

        # Deleting model 'EmailType'
        db.delete_table(u'stat_db_emailtype')

        # Deleting model 'EmailAddress'
        db.delete_table(u'stat_db_emailaddress')

        # Deleting model 'PhoneType'
        db.delete_table(u'stat_db_phonetype')

        # Deleting model 'PhoneNumber'
        db.delete_table(u'stat_db_phonenumber')

        # Deleting model 'ContactPhoneNumber'
        db.delete_table(u'stat_db_contactphonenumber')

        # Deleting model 'Gender'
        db.delete_table(u'stat_db_gender')

        # Deleting model 'Level'
        db.delete_table(u'stat_db_level')

        # Deleting model 'Sport'
        db.delete_table(u'stat_db_sport')

        # Deleting model 'Club'
        db.delete_table(u'stat_db_club')

        # Deleting model 'EntityType'
        db.delete_table('EntityType')

        # Deleting model 'Entity'
        db.delete_table(u'stat_db_entity')

        # Deleting model 'EntityContact'
        db.delete_table(u'stat_db_entitycontact')

        # Deleting model 'Student'
        db.delete_table(u'stat_db_student')

        # Deleting model 'Athlete'
        db.delete_table(u'stat_db_athlete')

        # Deleting model 'Facility'
        db.delete_table(u'stat_db_facility')

        # Removing M2M table for field contact on 'Facility'
        db.delete_table('stat_db_facility_contact')

        # Deleting model 'Transportation'
        db.delete_table(u'stat_db_transportation')

        # Deleting model 'EventStatus'
        db.delete_table(u'stat_db_eventstatus')

        # Deleting model 'EventType'
        db.delete_table(u'stat_db_eventtype')

        # Deleting model 'Event'
        db.delete_table(u'stat_db_event')

        # Deleting model 'EventParticipant'
        db.delete_table(u'stat_db_eventparticipant')

        # Deleting model 'EventInformation'
        db.delete_table(u'stat_db_eventinformation')

        # Removing M2M table for field transportation on 'EventInformation'
        db.delete_table('stat_db_eventinformation_transportation')

        # Deleting model 'Score'
        db.delete_table(u'stat_db_score')

        # Deleting model 'ScoreBreakdown'
        db.delete_table(u'stat_db_scorebreakdown')

        # Deleting model 'StatisticType'
        db.delete_table(u'stat_db_statistictype')

        # Deleting model 'Statistic'
        db.delete_table(u'stat_db_statistic')


    models = {
        u'stat_db.address': {
            'Meta': {'object_name': 'Address'},
            'address1': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '100', 'db_column': "'Address1'"}),
            'address2': ('django.db.models.fields.CharField', [], {'max_length': '100', 'null': 'True', 'db_column': "'Address2'", 'blank': 'True'}),
            'city': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '100', 'db_column': "'City'"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_primary': ('django.db.models.fields.BooleanField', [], {'default': 'False', 'db_column': "'isPrimary'"}),
            'state': ('django.db.models.fields.CharField', [], {'default': "'NY'", 'max_length': '2', 'db_column': "'State'"}),
            'zip_code': ('django.db.models.fields.CharField', [], {'max_length': '10', 'db_column': "'Zip'", 'blank': 'True'})
        },
        u'stat_db.athlete': {
            'Meta': {'object_name': 'Athlete'},
            'away_jersey_num': ('django.db.models.fields.DecimalField', [], {'blank': 'True', 'null': 'True', 'db_column': "'AwayJerseyNum'", 'decimal_places': '0', 'max_digits': '3'}),
            'gender': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Gender']", 'db_column': "'GenderID'"}),
            'height': ('django.db.models.fields.CharField', [], {'max_length': '10', 'null': 'True', 'db_column': "'Height'", 'blank': 'True'}),
            'home_jersey_num': ('django.db.models.fields.DecimalField', [], {'blank': 'True', 'null': 'True', 'db_column': "'HomeJerseyNum'", 'decimal_places': '0', 'max_digits': '3'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'level': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Level']", 'db_column': "'LevelID'"}),
            'practice_jersey_num': ('django.db.models.fields.DecimalField', [], {'blank': 'True', 'null': 'True', 'db_column': "'PracticeJerseyNum'", 'decimal_places': '0', 'max_digits': '3'}),
            'sport': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Sport']", 'db_column': "'SportID'"}),
            'student': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Student']", 'db_column': "'StudentID'"}),
            'weight': ('django.db.models.fields.CharField', [], {'max_length': '10', 'null': 'True', 'db_column': "'Weight'", 'blank': 'True'}),
            'year': ('django.db.models.fields.DecimalField', [], {'blank': 'True', 'null': 'True', 'db_column': "'Year'", 'decimal_places': '0', 'max_digits': '4'})
        },
        u'stat_db.club': {
            'Meta': {'object_name': 'Club'},
            'abbreviation': ('django.db.models.fields.CharField', [], {'default': "'SHS'", 'max_length': '10', 'db_column': "'Abbreviation'"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'default': "'Sample High'", 'max_length': '50', 'db_column': "'Name'"})
        },
        u'stat_db.contact': {
            'Meta': {'object_name': 'Contact'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '50'}),
            'title': ('django.db.models.fields.CharField', [], {'default': "'Mr.'", 'max_length': '50', 'blank': 'True'})
        },
        u'stat_db.contactaddress': {
            'Meta': {'object_name': 'ContactAddress'},
            'address': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Address']", 'db_column': "'AddressID'"}),
            'contact': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Contact']", 'db_column': "'ContactID'"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'})
        },
        u'stat_db.contactphonenumber': {
            'Meta': {'object_name': 'ContactPhoneNumber'},
            'contact': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Contact']", 'db_column': "'ContactID'"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'phone_number': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.PhoneNumber']", 'db_column': "'PhoneNumberID'"})
        },
        u'stat_db.emailaddress': {
            'Meta': {'object_name': 'EmailAddress'},
            'contact': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Contact']", 'db_column': "'ContactID'"}),
            'email': ('django.db.models.fields.EmailField', [], {'default': "'test@test.com'", 'max_length': '255', 'db_column': "'Email'"}),
            'email_type': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.EmailType']", 'null': 'True', 'db_column': "'EmailTypeID'"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True', 'db_column': "'isActive'"}),
            'is_primary': ('django.db.models.fields.BooleanField', [], {'default': 'False', 'db_column': "'isPrimary'"})
        },
        u'stat_db.emailtype': {
            'Meta': {'object_name': 'EmailType'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'default': "'work'", 'max_length': '15', 'db_column': "'Name'"})
        },
        u'stat_db.entity': {
            'Meta': {'object_name': 'Entity'},
            'address': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Address']", 'null': 'True', 'db_column': "'AddressID'", 'blank': 'True'}),
            'color1': ('django.db.models.fields.CharField', [], {'max_length': '20', 'null': 'True', 'db_column': "'Color1'", 'blank': 'True'}),
            'color2': ('django.db.models.fields.CharField', [], {'max_length': '20', 'null': 'True', 'db_column': "'Coler2'", 'blank': 'True'}),
            'entity_type': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.EntityType']", 'db_column': "'EntityTypeID'"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'logo': ('django.db.models.fields.files.FileField', [], {'max_length': '100', 'null': 'True', 'db_column': "'Logo'", 'blank': 'True'}),
            'mascot': ('django.db.models.fields.CharField', [], {'max_length': '30', 'null': 'True', 'db_column': "'Mascot'", 'blank': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '50', 'db_column': "'Name'"}),
            'phone_number': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.PhoneNumber']", 'null': 'True', 'db_column': "'PhoneNumberID'", 'blank': 'True'})
        },
        u'stat_db.entitycontact': {
            'Meta': {'object_name': 'EntityContact'},
            'contact': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Contact']", 'db_column': "'ContactID'"}),
            'entity': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Entity']", 'db_column': "'EntityID'"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True', 'db_column': "'isActive'"})
        },
        u'stat_db.entitytype': {
            'Meta': {'object_name': 'EntityType', 'db_table': "'EntityType'"},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'default': "'High School'", 'max_length': '30', 'db_column': "'Name'"})
        },
        u'stat_db.event': {
            'Meta': {'object_name': 'Event'},
            'club': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Club']", 'null': 'True', 'db_column': "'ClubID'", 'blank': 'True'}),
            'date': ('django.db.models.fields.DateField', [], {'null': 'True', 'db_column': "'Date'", 'blank': 'True'}),
            'entity': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Entity']", 'db_column': "'EntityID'"}),
            'event_status': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.EventStatus']", 'db_column': "'EventStatusID'"}),
            'event_type': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.EventType']", 'null': 'True', 'db_column': "'EventTypeID'", 'blank': 'True'}),
            'facility': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Facility']", 'null': 'True', 'db_column': "'FacilityID'"}),
            'gender': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Gender']", 'db_column': "'GenderID'"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_conference': ('django.db.models.fields.BooleanField', [], {'default': 'True', 'db_column': "'isConference'"}),
            'level': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Level']", 'null': 'True', 'db_column': "'LevelID'"}),
            'sport': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Sport']", 'db_column': "'SportID'"}),
            'time': ('django.db.models.fields.TimeField', [], {'null': 'True', 'db_column': "'Time'", 'blank': 'True'}),
            'title': ('django.db.models.fields.CharField', [], {'default': "'Homecoming'", 'max_length': '255', 'db_column': "'Title'"})
        },
        u'stat_db.eventinformation': {
            'Meta': {'object_name': 'EventInformation'},
            'dismissal_time': ('django.db.models.fields.DateTimeField', [], {'null': 'True', 'db_column': "'DismissalTime'", 'blank': 'True'}),
            'entity': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Entity']", 'db_column': "'EntityID'"}),
            'event': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Event']", 'db_column': "'EventID'"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'report_time': ('django.db.models.fields.DateTimeField', [], {'null': 'True', 'db_column': "'ReportTime'", 'blank': 'True'}),
            'title': ('django.db.models.fields.CharField', [], {'default': "'Homecoming'", 'max_length': '255', 'db_column': "'Title'"}),
            'trans_dismiss': ('django.db.models.fields.DateTimeField', [], {'null': 'True', 'db_column': "'TransDismiss'", 'blank': 'True'}),
            'trans_return': ('django.db.models.fields.DateTimeField', [], {'null': 'True', 'db_column': "'TransReturn'", 'blank': 'True'}),
            'transportation': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['stat_db.Transportation']", 'null': 'True', 'db_column': "'TransportationID'", 'symmetrical': 'False'})
        },
        u'stat_db.eventparticipant': {
            'Meta': {'unique_together': "(('event', 'entity'),)", 'object_name': 'EventParticipant'},
            'entity': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Entity']", 'db_column': "'EntityID'"}),
            'event': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Event']", 'db_column': "'EventID'"}),
            'has_accepted': ('django.db.models.fields.BooleanField', [], {'default': 'True', 'db_column': "'hasAccepted'"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_host': ('django.db.models.fields.BooleanField', [], {'default': 'False', 'db_column': "'isHost'"})
        },
        u'stat_db.eventstatus': {
            'Meta': {'object_name': 'EventStatus'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'default': "'Pending'", 'max_length': '15', 'db_column': "'Name'"})
        },
        u'stat_db.eventtype': {
            'Meta': {'object_name': 'EventType'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'default': "'Conference Game'", 'max_length': '20', 'db_column': "'Name'"})
        },
        u'stat_db.facility': {
            'Meta': {'object_name': 'Facility'},
            'contact': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['stat_db.Contact']", 'null': 'True', 'db_column': "'ContactID'", 'blank': 'True'}),
            'directions': ('django.db.models.fields.TextField', [], {'null': 'True', 'db_column': "'Directions'", 'blank': 'True'}),
            'entity': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Entity']", 'null': 'True', 'db_column': "'EntityID'", 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'image': ('django.db.models.fields.files.FileField', [], {'max_length': '100', 'null': 'True', 'db_column': "'Image'", 'blank': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '50', 'db_column': "'Name'"})
        },
        u'stat_db.gender': {
            'Meta': {'object_name': 'Gender'},
            'abbreviation': ('django.db.models.fields.CharField', [], {'default': "'M'", 'max_length': '3', 'db_column': "'Abbreviation'"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'default': "'Male'", 'max_length': '15', 'db_column': "'Name'"})
        },
        u'stat_db.level': {
            'Meta': {'object_name': 'Level'},
            'abbreviation': ('django.db.models.fields.CharField', [], {'default': "'AAAAA'", 'max_length': '10', 'db_column': "'Abbreviation'"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'default': "'Division 1'", 'max_length': '30', 'db_column': "'Name'"})
        },
        u'stat_db.phonenumber': {
            'Meta': {'object_name': 'PhoneNumber'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True', 'db_column': "'isActive'"}),
            'is_primary': ('django.db.models.fields.BooleanField', [], {'default': 'False', 'db_column': "'isPrimary'"}),
            'phone_number': ('django.db.models.fields.CharField', [], {'default': "'123-456-7890'", 'max_length': '17', 'db_column': "'PhoneNumber'"}),
            'phone_type': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.PhoneType']", 'null': 'True'})
        },
        u'stat_db.phonetype': {
            'Meta': {'object_name': 'PhoneType'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'default': "'cell'", 'max_length': '10', 'db_column': "'Name'"})
        },
        u'stat_db.score': {
            'Meta': {'object_name': 'Score'},
            'creator_entity': ('django.db.models.fields.related.ForeignKey', [], {'related_name': "'creator_score_set'", 'null': 'True', 'db_column': "'CreatorEntityID'", 'to': u"orm['stat_db.Entity']"}),
            'entity': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Entity']", 'null': 'True', 'db_column': "'EntityID'"}),
            'event': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Event']", 'db_column': "'EventID'"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'score': ('django.db.models.fields.DecimalField', [], {'default': '0', 'db_column': "'Score'", 'decimal_places': '0', 'max_digits': '4'})
        },
        u'stat_db.scorebreakdown': {
            'Meta': {'object_name': 'ScoreBreakdown'},
            'breakdown': ('django.db.models.fields.CharField', [], {'default': "'Quarter'", 'max_length': '20', 'db_column': "'Breakdown'"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'score': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Score']", 'db_column': "'ScoreID'"}),
            'subscore': ('django.db.models.fields.DecimalField', [], {'default': '0', 'db_column': "'Score'", 'decimal_places': '0', 'max_digits': '4'})
        },
        u'stat_db.sport': {
            'Meta': {'object_name': 'Sport'},
            'abbreviation': ('django.db.models.fields.CharField', [], {'default': "'FB'", 'max_length': '7', 'db_column': "'Abbreviation'"}),
            'high_score_wins': ('django.db.models.fields.BooleanField', [], {'default': 'True', 'db_column': "'HighScoreWins'"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'default': "'Football'", 'max_length': '30', 'db_column': "'Name'"})
        },
        u'stat_db.statistic': {
            'Meta': {'object_name': 'Statistic'},
            'athlete': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Athlete']", 'null': 'True', 'db_column': "'AthleteID'", 'blank': 'True'}),
            'creator_entity': ('django.db.models.fields.related.ForeignKey', [], {'blank': 'True', 'related_name': "'creator_statistic_set'", 'null': 'True', 'db_column': "'CreatorEntityID'", 'to': u"orm['stat_db.Entity']"}),
            'entity': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Entity']", 'null': 'True', 'db_column': "'EntityID'", 'blank': 'True'}),
            'event': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Event']", 'null': 'True', 'db_column': "'EventID'", 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'statistic_type': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.StatisticType']", 'db_column': "'StatisticTypeID'"}),
            'value': ('django.db.models.fields.DecimalField', [], {'default': '0', 'db_column': "'Value'", 'decimal_places': '15', 'max_digits': '25'})
        },
        u'stat_db.statistictype': {
            'Meta': {'object_name': 'StatisticType'},
            'code': ('django.db.models.fields.DecimalField', [], {'default': '0', 'db_column': "'Code'", 'decimal_places': '0', 'max_digits': '10'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '30', 'db_column': "'Name'"})
        },
        u'stat_db.student': {
            'Meta': {'object_name': 'Student'},
            'dob': ('django.db.models.fields.DateField', [], {'default': 'datetime.datetime(2013, 6, 14, 0, 0)', 'db_column': "'DOB'"}),
            'ethnicity': ('django.db.models.fields.CharField', [], {'max_length': '30', 'null': 'True', 'db_column': "'Ethnicity'", 'blank': 'True'}),
            'first_name': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '50', 'db_column': "'FName'"}),
            'gender': ('django.db.models.fields.CharField', [], {'default': "'Male'", 'max_length': '10', 'db_column': "'Gender'"}),
            'graduation_year': ('django.db.models.fields.DecimalField', [], {'blank': 'True', 'null': 'True', 'db_column': "'GraduationYear'", 'decimal_places': '0', 'max_digits': '4'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'last_name': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '50', 'db_column': "'LName'"}),
            'middle_name': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '50', 'null': 'True', 'db_column': "'MName'", 'blank': 'True'}),
            'nickname': ('django.db.models.fields.CharField', [], {'max_length': '30', 'null': 'True', 'db_column': "'Nickname'", 'blank': 'True'}),
            'notes': ('django.db.models.fields.TextField', [], {'null': 'True', 'db_column': "'Notes'", 'blank': 'True'}),
            'student_id': ('django.db.models.fields.CharField', [], {'max_length': '30', 'null': 'True', 'db_column': "'StudentID'", 'blank': 'True'}),
            'suffix': ('django.db.models.fields.CharField', [], {'max_length': '5', 'null': 'True', 'db_column': "'Suffix'", 'blank': 'True'})
        },
        u'stat_db.transportation': {
            'Meta': {'object_name': 'Transportation'},
            'contact': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['stat_db.Contact']", 'db_column': "'ContactID'"}),
            'description': ('django.db.models.fields.TextField', [], {'db_column': "'Description'", 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '50', 'db_column': "'Name'"})
        }
    }

    complete_apps = ['stat_db']