from django.conf.urls import patterns, include, url
from base import views

urlpatterns = patterns('',
                       url(r'^$', views.Index.as_view())
                     )

