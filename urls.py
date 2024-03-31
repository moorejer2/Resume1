from django.conf.urls import patterns, include, url
from stats import views

urlpatterns = patterns('stats.views',
                       url(r'^$', views.Index.as_view()),
                       url(r'^event/(?P<event_id>\d+)/$', views.EventStats.as_view()),
                       url(r'^eventedit/(?P<event_id>\d+)/$', views.EventEdit.as_view()),
					   url(r'^team/(?P<team_id>\d+)/$', views.TeamDetail.as_view()),
					   url(r'^team_manage/(?P<team_id>\d+)/$', views.TeamManageDetail.as_view()),
                       url(r'^market_detail/(?P<market_id>\d+)/$', views.MarketDetailDetail.as_view()),

					   url(r'^dashboard/$', views.DashboardPage.as_view(), name='dashboard_page'),
					   url(r'^eventlist/$', views.EventListPage.as_view(), name='eventlist_page'),
					   url(r'^add_athlete/$', views.AddAthletePage.as_view(), name='add_athlete_page'),
					   url(r'^add_student/$', views.AddStudentPage.as_view(), name='add_student_page'),
					   url(r'^new_event/$', views.EventEntryPage.as_view(), name='new_event_page'),
					   url(r'^user_list/$', views.UserListPage.as_view(), name='user_list_page'),
                       url(r'^create_user/$', views.CreateUserPage.as_view(), name='create_user_page'),
                       url(r'^media-market/$', views.MarketPage.as_view(), name='market_page'),
                     )

