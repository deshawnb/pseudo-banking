from django.db import models
from authentication.models import User

# Create your models here.

class Budget(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    budget_limit = models.IntegerField()
    budget_name = models.CharField(max_length=100)