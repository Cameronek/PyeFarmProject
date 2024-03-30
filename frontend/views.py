from django.shortcuts import render
from .models import Data, CompleteData
from rest_framework import generics, status
from .serializers import DataSerializer, CompleteDataSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

def index(request, *args, **kwargs):
    latest_reading = Data.objects.order_by('-date', '-time').first()
    return render(request, 'frontend/index.html', {'data': latest_reading})

class DataView(generics.ListAPIView):
    queryset = Data.objects.all()
    serializer_class = DataSerializer
    
class CompleteDataView(generics.ListAPIView):
    queryset = CompleteData.objects.all()
    serializer_class = CompleteDataSerializer