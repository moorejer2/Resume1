from django.conf.urls import patterns, include, url
from home import views

urlpatterns = patterns(
        'home.views',
        url(r'^$', views.index, name='home'),
        )

