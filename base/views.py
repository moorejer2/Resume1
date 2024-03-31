from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template.loader import get_template
from django.template import Context

from django.views.generic.base import TemplateView

class Index(TemplateView):
    template_name = 'index.html'

