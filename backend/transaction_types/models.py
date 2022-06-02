from django.db import models

# Create your models here.

class TransactionType(models.Model):
    type = models.CharField(max_length=255)