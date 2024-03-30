from django.db import models

# Create your models here.
class Data(models.Model):
    date = models.DateField()
    time = models.TimeField()
    air_temp = models.DecimalField(max_digits=4, decimal_places=2)
    air_humid = models.DecimalField(max_digits=4, decimal_places=2)
    soil_temp = models.DecimalField(max_digits=4, decimal_places=2)
    soil_moisture = models.DecimalField(max_digits=6, decimal_places=2)
    class Meta:
        managed = False
        db_table = 'sensor_values'
        
class CompleteData(models.Model):
    date = models.DateField()
    time = models.TimeField()
    air_temp = models.DecimalField(max_digits=4, decimal_places=2)
    air_humid = modes.DecimalField(max_digits=4, decimal_places=2)
    soil_moisture1 = models.DecimalField(max_digits=5, decimal_places=2)
    soil_moisture2 = models.DecimalField(max_digits=5, decimal_places=2)
    soil_moisture3 = models.DecimalField(max_digits=5, decimal_places=2)
    soil_temp1 = models.DecimalField(max_digits=4, decimal_places=2)
    soil_temp2 = models.DecimalField(max_digits=4, decimal_places=2)
    soil_temp3 = models.DecimalField(max_digits=4, decimal_places=2)
    class Meta:
        managed = False
        db_table ='multiple_plots'