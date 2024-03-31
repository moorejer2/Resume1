from django.db import models
from stat_db.models import Event, EventParticipant
import datetime


# Create static content here to be passed into template
# for stats all we need right now is an event id from the previous page


class statEvent():
    event_id = 0
    #make a call to the database for all of our static variables
    #participants = "database/event/"+id+"/participants", etc.
    participants = ["part1", "part2", "part3"]
    host = "part2"
    name = "name of event"
    event_type = "type of event"
    title = "event title"
    location = "location"
    date = datetime.datetime.today()

    def __init__(self, eid):
        #super(Event, self).__init__()
        try:
            self.event_id = eid
            self.participants = EventParticipant.objects.filter(event_id=eid).values_list('entity__name', flat=True)
            self.host = EventParticipant.objects.filter(event_id=eid).filter(is_host=True).values_list('entity__name', flat=True)[0]
            e = Event.objects.filter(id=eid).get()
            self.title = e.title
            self.event_type = e.event_type
            self.location = e.facility
            self.date = e.date
        except:
            pass

