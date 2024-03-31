from django.contrib import admin
from stat_db import models


class SportAdmin(admin.ModelAdmin):
    """ Control the admin interface for Sports """
    #list_display = ('name', 'abbreviation', 'high_score_wins')
    pass

class AthleteAdmin(admin.ModelAdmin):
    """ Control the admin interface for Sports """
    #list_display = ('student',  'gender', 'level')
    pass

class EntityAdmin(admin.ModelAdmin):
    """ Control the admin interface for Sports """
    #list_display = ('name', 'entity_type', 'address', 'phone_number')
    pass

class EventParticipantAdmin(admin.ModelAdmin):
    """ Control the admin interface for Sports """
    #list_display = ('entity', 'event')
    pass

class EventAdmin(admin.ModelAdmin):
    """ Control the admin interface for Sports """
    #list_display = ('title', 'date', 'event_status', 'sport', 'gender',
    #                'level',  'event_type')
    pass

# register all db types with admin site to be able to modify the data
# using the django admin interface
admin.site.register(models.Address)
admin.site.register(models.Athlete, AthleteAdmin)
admin.site.register(models.Club)
admin.site.register(models.Contact)
admin.site.register(models.ContactAddress)
admin.site.register(models.ContactPhoneNumber)
admin.site.register(models.Entity, EntityAdmin)
admin.site.register(models.EntityType)
admin.site.register(models.EntityContact)
admin.site.register(models.EmailType)
# admin.site.register(models.EmailAddress)
admin.site.register(models.Event, EventAdmin)
admin.site.register(models.EventStatus)
admin.site.register(models.EventType)
admin.site.register(models.EventInformation)
admin.site.register(models.EventParticipant, EventParticipantAdmin)
admin.site.register(models.Facility)
admin.site.register(models.Gender)
admin.site.register(models.Level)
admin.site.register(models.PhoneType)
admin.site.register(models.PhoneNumber)
admin.site.register(models.Sport, SportAdmin)
admin.site.register(models.Score)
admin.site.register(models.ScoreBreakdown)
admin.site.register(models.Statistic)
admin.site.register(models.StatisticTypeCategory)
admin.site.register(models.StatisticType)
admin.site.register(models.Student)
admin.site.register(models.Transportation)
admin.site.register(models.Team)
admin.site.register(models.Market)
