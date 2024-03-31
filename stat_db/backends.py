from stat_db.models import User
from django.db.models import Q

class PasswordAuthentication(object):
    supports_object_permission = False
    supports_anonymous_user = False
    support_inactive_user = False


    def authenticate(self,username=None,email=None,password=None):
        try:
            u = User.objects.get(Q(username=username) | Q(email=email))
            if not u.check_password(password):
                return None
            return u
        except ObjectDoesNotExist:
            return None


    def get_user(self,user_id):
        return User.objects.get(pk=user_id)
