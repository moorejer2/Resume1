from django.conf.urls import patterns, url, include
from rest_framework import routers
import views

router = routers.DefaultRouter()
router.register(r'events',views.EventViewSet,base_name='events')
router.register(r'events_full',views.EventFullViewSet,base_name='events_full')
router.register(r'entities',views.EntityViewSet)
router.register(r'contactaddresses',views.ContactAddressViewSet)
router.register(r'contactphonenumbers',views.ContactPhoneNumberViewSet)
router.register(r'emailcontacts',views.EmailContactViewSet)
router.register(r'entitycontacts',views.EntityContactViewSet)
router.register(r'students',views.StudentViewSet)
router.register(r'athletes',views.AthleteViewSet)
router.register(r'facilities',views.FacilityViewSet)
router.register(r'transportation',views.TransportationViewSet)
router.register(r'eventparticipants',views.EventParticipantViewSet)
router.register(r'eventinformation',views.EventInformationViewSet)
router.register(r'scores',views.ScoreViewSet)
router.register(r'scorebreakdown',views.ScoreBreakdownViewSet)
router.register(r'statisticstypecategory',views.StatisticTypeCategoryViewSet)
router.register(r'statisticstype',views.StatisticTypeViewSet)
router.register(r'statistics',views.StatisticViewSet)
router.register(r'contacts',views.ContactViewSet)
router.register(r'address',views.AddressViewSet)
router.register(r'teams',views.TeamViewSet)
router.register(r'users',views.UserViewSet)
router.register(r'eventteamstats',views.EventTeamStatisticViewSet)
router.register(r'eventathstats',views.EventAthleteStatisticViewSet)
router.register(r'markets',views.MarketViewSet)
router.register(r'marketentities',views.MarketEntityViewSet)

#router.register(r'types2',views.TypesView2,base_name='types2')
#router.register(r'types',views.TypesViewSet,)
urlpatterns = router.urls
urlpatterns += patterns('',
                        url(r'^typesdata/$',views.TypesView.as_view(),name='typesdata-list'),
                        url(r'^types2/$',views.TypesView2.as_view(),name='types2data-list'),
                        url(r'^createuser/$', views.CreateUserView.as_view(),name='createuser'),
                        )
