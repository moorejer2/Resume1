from django import forms

class SignupForm(forms.Form):
    first_name = forms.CharField(max_length=30 )
    last_name = forms.CharField(max_length=30 )

    def save(self, user):
        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']
        user.save()
