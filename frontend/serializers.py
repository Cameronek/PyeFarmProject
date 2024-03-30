from rest_framework import serializers
from .models import Data, CompleteData

class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        fields = ('id', 'date', 'time', 'air_temp', 'air_humid',
                  'soil_temp', 'soil_moisture')
        
class CompleteDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompleteData
        fields = ('id', 'date', 'time', 'air_temp', 'air_humid', 'soil_moisture1', 'soil_moisture2', 'soil_moisture3',
                  'soil_temp1', 'soil_temp2', 'soil_temp3')