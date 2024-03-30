from rest_framework import serializers
from .models import Data

class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        fields = ('id', 'date', 'time', 'air_temp', 'air_humid',
                  'soil_temp', 'soil_moisture')