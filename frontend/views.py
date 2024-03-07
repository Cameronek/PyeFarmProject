from django.shortcuts import render
from .models import Temp

def index(request, *args, **kwargs):
    latest_reading = Temp.objects.order_by('-date', '-time').first()
    return render(request, 'frontend/index.html', {'readings': latest_reading})
