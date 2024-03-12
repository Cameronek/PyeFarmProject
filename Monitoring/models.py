from django.db import models

class Member(models.Model):
  firstname = models.CharField(max_length=255, default="")
  lastname = models.CharField(max_length=255, default="")
# Create your models here.
