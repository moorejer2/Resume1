import re
from stat_db.models import User
from django.contrib.sessions.middleware import SessionMiddleware
from django.conf import settings
from django.utils.importlib import import_module

class AuthTokenMiddleware(SessionMiddleware):
    """
Changes the behavior of the SessionMiddleware to work the same with Tokens.
"""
    def process_request(self,request):
        auth = request.META.get('HTTP_AUTHORIZATION', None)
        if not auth:
            return super(AuthTokenMiddleware,self).process_request(request)
        email,token = re.match('^\s*Token\s+(\S+):(\S+)\s*$').groups()
        try:
            a = AuthSession.objects.get(user__email=email, authtoken=token)
            se = import_module(settings.SESSION_ENGINE)
            session = se.SessionStore(session_key=a.session_key)
            session['_auth_token'] = a.authtoken
            request.user = user
            request.session = session
        except ObjectDoesNotExist:
            return None
