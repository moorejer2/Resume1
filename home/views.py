# Create your views here.def index(request):
from django.shortcuts import render_to_response

def index(request):
    return render_to_response('home/index.html')


