from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template.loader import get_template
from django.template import Context
from django.template import RequestContext
from django.views.generic.base import TemplateView
from stats.models import statEvent
from stat_db import models
import os

class Index(TemplateView):
    template_name = 'index.html'


class EventStats(TemplateView):
    template_name = 'football-stats.html'

    def get_context_data(self,**kwargs):
        context = super(EventStats,self).get_context_data(**kwargs)
        event_id = kwargs.get('event_id',None)
        context['types'] = models.getTypesData()
        if event_id:
            context['event'] = models.Event.objects.get(pk=event_id)
        return context

class EventEdit(TemplateView):
    template_name = 'event-edit.html'

    def get_context_data(self,**kwargs):
        context = super(EventEdit,self).get_context_data(**kwargs)
        event_id = kwargs.get('event_id',None)
        context['types'] = models.getTypesData()
        if event_id:
            context['event'] = models.Event.objects.get(pk=event_id)
        return context

class TeamDetail(TemplateView):
    template_name = 'team-simple.html'

    def get_context_data(self,**kwargs):
        context = super(TeamDetail,self).get_context_data(**kwargs)
        team_id = kwargs.get('team_id',None)
        context['types'] = models.getTypesData()
        if team_id:
            context['team'] = models.Team.objects.get(pk=team_id)
        return context

class TeamManageDetail(TemplateView):
    template_name = 'team.html'

    def get_context_data(self,**kwargs):
        context = super(TeamManageDetail,self).get_context_data(**kwargs)
        team_id = kwargs.get('team_id',None)
        context['types'] = models.getTypesData()
        if team_id:
            context['team'] = models.Team.objects.get(pk=team_id)
        return context

class MarketDetailDetail(TemplateView):
    template_name = 'market_detail.html'

    def get_context_data(self,**kwargs):
        context = super(MarketDetailDetail,self).get_context_data(**kwargs)
        market_id = kwargs.get('market_id',None)
        context['types'] = models.getTypesData()
        if market_id:
            context['market'] = models.Market.objects.get(pk=market_id)
        return context

def displayStats(request, event_i):
    #function to ensure event_id is  valid and not an attack goes here
    event = statEvent(event_id)
    statTemplate = get_template('stats.html')
    page = statTemplate.render(Context({'event': event}))
    return HttpResponse(page)

class DashboardPage(TemplateView):
    template_name = 'dashboard.html'

class EventListPage(TemplateView):
    template_name = 'Event-Listing.html'

class AddAthletePage(TemplateView):
    template_name = 'Add-Athlete.html'

class AddStudentPage(TemplateView):
    template_name = 'add-student.html'

class EventEntryPage(TemplateView):
    template_name = 'event-entry.html'

class UserListPage(TemplateView):
    template_name = 'user_list.html'

class CreateUserPage(TemplateView):
    template_name = 'Create-New-Account1.html'

class MarketPage(TemplateView):
    template_name = 'media-market.html'
