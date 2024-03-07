from django.db import models

# Create your models here.
class Temp(models.Model):
    data_pin = models.IntegerField(default=0)
    date = models.DateField()
    time = models.TimeField()
    temp = models.DecimalField(max_digits=4,decimal_places=2)
    humid = models.DecimalField(max_digits=4,decimal_places=2)
    class Meta:
        managed = False
        db_table = 'new_air_readings'