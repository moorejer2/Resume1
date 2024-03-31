from django.conf.urls import patterns, url, include
from stat_db import views
from rest_framework.routers import DefaultRouter, Route
#from rest_framework.viewsets import ModelViewSet
import inspect

# root name for api url
root_name = 'db'
# dictionary for lookup of each viewset url as defined
# url will be: root_name/viewset_url_name/
#viewset_names = {}


class NoSlashRouter(DefaultRouter):
    """
    Implements all routes of DefualtRouter without the trailing slash

    """

    routes = [
        Route(
            url=r'^{prefix}$',
            mapping={
                'get': 'list',
                'post': 'create'},
            name='{basename}-list',
            initkwargs={'suffix': 'List'}
        ),
        Route(
            url=r'^{prefix}/$',
            mapping={
                'get': 'list',
                'post': 'create'},
            name='{basename}-list',
            initkwargs={'suffix': 'List'}
        ),
        Route(
            url=r'^{prefix}/{lookup}$',
            mapping={
                'get': 'retrieve',
                'put': 'update',
                'patch': 'partial_update',
                'delete': 'destroy'},
            name='{basename}-detail',
            initkwargs={'suffix': 'Instance'}
        ),
        Route(
            url=r'^{prefix}/{lookup}/$',
            mapping={
                'get': 'retrieve',
                'put': 'update',
                'patch': 'partial_update',
                'delete': 'destroy'},
            name='{basename}-detail',
            initkwargs={'suffix': 'Instance'}
        ),
        Route(
            url=r'^{prefix}/{lookup}/{methodname}$',
            mapping={'{httpmethod}': '{methodname}'},
            name='{basename}-{methodnamehyphen}',
            initkwargs={}
        ),
        ]


# add all Viewsets to router to autogenerate Urls for list and detail views
router = NoSlashRouter()
# discover all views using reflection
for view_name, obj in inspect.getmembers(views):
    if inspect.isclass(obj):
        if issubclass(obj, views.base_viewset_class) and \
                not obj is views.base_viewset_class:
            name = view_name.rsplit(views.base_viewset_suffix)[0].lower()
            #viewset_names[view_name] = "%s/%s" % (root_name, name)
            router.register(name, obj)

##### Testing stub code #####
# router.register(r'event2', views.EventFilterModelViewSet2)
##### End Testing stub #####

urlpatterns = router.urls
urlpatterns += patterns('',
                        url(r'api0/', include('stat_db.api0.routers')),
                            )

##### Testing stub code #####
# urlpatterns += patterns('stat_db.views',
                       # url(r'^event3/?$', views.EventList.as_view(), name='event3-list'),
                       # url(r'^event3/(?P<pk>[0-9]+)/?$', views.EventDetail.as_view(), name='event3-detail'),
                       # )

# Should be done using "reverse" method
def get_url_from_viewset(viewset):
    """
    Retreive the relative url base for a given viewset

    """
    view_name = viewset.__name__
    name = view_name.rsplit(views.base_viewset_suffix)[0].lower()
    return '/' + root_name + '/' + name
