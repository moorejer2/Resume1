from rest_framework import viewsets
from rest_framework import filters
from stat_db import models
import serializers
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.exceptions import APIException

from allauth.account.models import EmailAddress

from rest_framework import status


import django_filters


class InvalidDataException(APIException):
    pass


class EventViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EventSerial
    queryset = models.Event.objects.all()
    
    filter_backends = (filters.SearchFilter,filters.DjangoFilterBackend,filters.OrderingFilter,)
    filter_fields = ['event_type__name',
                  'event_type',
                  'sport__name',
                  'sport',
                  'gender',
                  'gender__name',
                  'gender__abbreviation',
                  'facility',
                  'level',
                  'event_status',
                  'event_status__name']
    
    
class EntityViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EntitySerial
    queryset = models.Entity.objects.all()

    filter_backends = (filters.SearchFilter,filters.DjangoFilterBackend,filters.OrderingFilter,)
    filter_fields = ['entity_type__name',
                     'entity_type',
                     'id',
                     'name']
    search_fields = ['name']

    def create(self,request):
        entity_data = request.DATA
        address_data = entity_data.get('address_data',None)
        phone_data = entity_data.get('phone_number_data',None)
        
        errors = None
        try:
            if address_data:
                a = serializers.AddressSerial(data=address_data)
                if a.is_valid():
                    obj = a.save()
                    entity_data['address'] = obj.pk
                else:
                    errors = a.errors
                    raise InvalidDataException
            if phone_data:
                p = serializers.PhoneNumberSerial(data=phone_data)
                if p.is_valid():
                    obj = p.save()
                    entity_data['phone_number'] = obj.pk
                else:
                    errors = p.errors
            e = serializers.EntitySerial(data=entity_data)
            if e.is_valid():
                obj = e.save()
                headers = self.get_success_headers(e.data)
                return Response(e.data, status=status.HTTP_201_CREATED,
                                headers=headers)
            else:
                errors = e.errors
                raise InvalidDataException
        except InvalidDataException:
           return Response(errors, status=status.HTTP_400_BAD_REQUEST) 
            

    def update(self,request,*args, **kwargs):
        ## Working 
        ## Need to apply permissions
        entity_data = request.DATA
        address_data = entity_data.get('address_data',None)
        phone_data = entity_data.get('phone_number_data',None)
        partial = kwargs.get('partial', False)
       
        
        errors = None
        try:
            if address_data:
                
                if address_data.get('id',None):
                    u_partial = partial
                    obj = models.Address.objects.get(pk=address_data['id'])
                    u_kwargs = {'force_update': True}
                else:
                    u_partial=False
                    u_kwargs = {'force_insert': True}
                    obj = None 
                a = serializers.AddressSerial(instance=obj, data=address_data,
                                              partial=u_partial,
                                              context=self.get_serializer_context())
                
                if a.is_valid():
                    obj = a.save(**u_kwargs)
                    entity_data['address'] = obj.pk
                else:
                    error = a.errors
                    raise InvalidDataException
            if phone_data:               
                if phone_data.get('id',None):
                    obj = models.PhoneNumber.objects.get(pk=phone_data['id'])
                    u_partial = partial
                    u_kwargs = {'force_update': True} 
                else:
                    obj = None
                    u_partial=False
                    u_kwargs = {'force_insert': True} 
                p = serializers.PhoneNumberSerial(instance=obj, data=phone_data,
                                                  partial=u_partial,
                                                  context=self.get_serializer_context())
                if p.is_valid():
                    obj = p.save(**u_kwargs)
                    entity_data['phone_number'] = obj.pk
                else:
                    errors = p.errors
                    raise InvalidDataException
            return super(EntityViewSet,self).update(request,*args,**kwargs)
            
        except InvalidDataException:
            return Response(errors, status=status.HTTP_400_BAD_REQUEST) 
        
class ContactViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ContactSerial
    queryset = models.Contact.objects.all()

class ContactAddressViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ContactAddressSerial
    queryset = models.ContactAddress.objects.all()

class ContactPhoneNumberViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ContactPhoneNumberSerial
    queryset = models.ContactPhoneNumber.objects.all()

class AddressViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AddressSerial
    queryset = models.Address.objects.all()

class EmailContactViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EmailContactSerial
    queryset = models.EmailContact.objects.all()

class EntityContactViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EntityContactSerial
    queryset = models.EntityContact.objects.all()

class StudentViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.StudentSerial
    queryset = models.Student.objects.all()

class AthleteViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AthleteSerial
    queryset = models.Athlete.objects.all()

    filter_backends = (filters.SearchFilter,filters.DjangoFilterBackend,filters.OrderingFilter,)
    filter_fields = ['entity',
                     'gender',
                     'graduation_year',
                     'level']
    search_fields = ['first_name',
                     'last_name']

class FacilityViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.FacilitySerial
    queryset = models.Facility.objects.all()

    filter_backends = (filters.SearchFilter,filters.DjangoFilterBackend,filters.OrderingFilter,)
    filter_fields = ['entity',
                     'entity_type__name',
                     'entity_type',]
    search_fields = ['name',]
    
class TransportationViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.TransportationSerial
    queryset = models.Transportation.objects.all()

class EventFullViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EventFullSerial
    queryset = models.Event.objects.all()
    
    filter_backends = (filters.SearchFilter,filters.DjangoFilterBackend,filters.OrderingFilter,)
    filter_fields = ['event_type__name',
                     'event_type',
                     'sport__name',
                     'sport',
					 'date',
                     'gender',
                     'gender__name',
                     'gender__abbreviation',
                     'facility',
                     'level',
                     'event_status',
                     'event_status__name',
                     'eventinformation__entity',
                     'eventinformation__entity__name',
                     ]
    search_fields = ['event_type__name',
                     'title',
                     'level__name',
                     'eventinformation__entity__name',
                     'event_participant__entity_name'

                     ]


class EventParticipantViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EventParticipantSerial
    queryset = models.EventParticipant.objects.all()

    filter_backends = (filters.DjangoFilterBackend,filters.OrderingFilter,)
    filter_fields = ['entity',
                     'entity__entity_type__name',
                     'event']

class EventTeamStatisticViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EventTeamStatisticSerial
    queryset = models.EventTeamStatistic.objects.all()
    
    filter_backends = (filters.DjangoFilterBackend,filters.OrderingFilter,)
    filter_fields = ['eventparticipant','eventparticipant__event']

class EventAthleteStatisticViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EventAthleteStatisticSerial
    queryset = models.EventAthleteStatistic.objects.all()

    filter_backends = (filters.DjangoFilterBackend, filters.OrderingFilter,)
    filter_fields = ['eventparticipant', 'eventparticipant__event',
                     'athlete']

class EventInformationViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EventInformationSerial
    queryset = models.EventInformation.objects.all()

class ScoreViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ScoreSerial
    queryset = models.Score.objects.all()

    filter_backends = (filters.SearchFilter, filters.DjangoFilterBackend, filters.OrderingFilter,)
    filter_fields = ('eventparticipant','eventparticipant__event','event')


class ScoreBreakdownViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ScoreBreakdownSerial
    queryset = models.ScoreBreakdown.objects.all()

class StatisticTypeCategoryViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.StatisticTypeCategorySerial
    queryset = models.StatisticTypeCategory.objects.all()

class StatisticTypeViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.StatisticTypeSerial
    queryset = models.StatisticType.objects.all()

    filter_backends = (filters.SearchFilter,filters.DjangoFilterBackend,filters.OrderingFilter,)
    filter_fields = ['sport',
                     'category',]

class StatisticViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.StatisticSerial
    queryset = models.Statistic.objects.all()

class TeamViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.TeamSerial
    queryset = models.Team.objects.all()

    filter_backends = (filters.SearchFilter,filters.DjangoFilterBackend,filters.OrderingFilter,)
    filter_fields = ['entity',
                     'sport',
                     'gender',
                     'level',
                     'team_year']
    search_fields = ['name']


class TypesView(APIView):
    
    def get(self,request,format=None):
        data = models.getTypesData()
        return Response(data)
        
class TypesView2(GenericAPIView):
    serializer_class = serializers.TypesSerial2
    

    




class EventWriteView(APIView):
    
    def post(self,request,format=None):
        part_data = request.DATA['participant_data']
        event_data = request.DATA['event_data']
        event_serial = serializers.EventSerial(None,
                                               data=event_data,
                                               context = self.get_serializer_context())
        if event_serial.is_valid():
            event = event_serial.save()
            if part_data:
                for pd in part_data:
                    p,cr = models.EventParticipant.objects.get_or_create(event=event,
                                                                      entity=models.Entity.objects.get(id=pd.id),defaults={'is_host': False, 'has_accepted': True})
            
    
class CreateUserView(APIView):
    serializer_class = serializers.CreateUserSerial

    def post(self,request,**kwargs):
        
        s = self.serializer_class(data=request.DATA)
        
        if s.is_valid():
            
            try:
                user = models.User.objects.get(email=s.data['email'])
                return Response({'error': 'user already exists'},status=400)
            except models.User.DoesNotExist:
                pass
            
            user = models.User.objects.create(email=s.data['email'],
                                              username=s.data['email'],
                                              )
            user.set_password(s.data['password'])
            user.save()
            em = EmailAddress.objects.create(email=s.data['email'],
                                             user=user,
                                             primary=True,
                                             verified=True)
            em.save()
            return Response({'success': True,
                             'user_id': user.pk }, status=201,
                                )
        else:
            return Response({'errors': s.errors},status=400)
        

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserSerial
    queryset = models.User.objects.all()
    
class MarketViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.MarketSerial
    queryset = models.Market.objects.all()

class MarketEntityViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.MarketEntitySerial
    queryset = models.MarketEntity.objects.all()



