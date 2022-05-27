from django.db import models
from customers.models import Customer

# Create your models here.

class Budget(models.Model):
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE)
    budget_limit = models.IntegerField()
    has_passed_limit = models.BooleanField()