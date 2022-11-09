from django.conf import settings
from django.db import models
class House(models.Model):
    'Generated Model'
    address = models.CharField(max_length=100,)
    city = models.CharField(max_length=100,)
    state = models.CharField(max_length=2,)
    zip = models.CharField(max_length=10,)
