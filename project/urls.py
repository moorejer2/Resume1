from django.conf.urls import patterns, include, url
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
import stat_db.urls

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
                       (r'^accounts/', include('allauth.urls')),
                       url(r'^stats/', include('stats.urls')),
                       url(r'^home/', include('home.urls')),
                       url(r'^$', include('base.urls')),
                       # Uncomment the admin/doc line below to enable admin
                       # documentation:
                       url(r'^admin/doc/',
                           include('django.contrib.admindocs.urls')),
                       # Uncomment the next line to enable the admin:
                       url(r'^admin/', include(admin.site.urls)),
                       # Stat_db app urls
                       url(r'^%s/' % stat_db.urls.root_name,
                           include('stat_db.urls'))
                       # Rest_Framework's browesable api views
                       # url(r'^api/', include('rest_framework.urls',
                       #     namespace='rest_framework'))
                       )

if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns()
