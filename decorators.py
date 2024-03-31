from django.http import HttpResponseRedirect
from django.conf import settings

""" usage: @ajax_required
"""
class ajax_required(object):
    def __init__(self, f):
        self.f = f

    def __call__(self, request):
        if request.is_ajax():
            return self.f(request)
        else:
            return HttpResponseRedirect(settings.LOGIN_URL)

