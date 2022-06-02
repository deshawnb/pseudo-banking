from django.db import models
from authentication.models import User

# Create your models here.

class Budget(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    budget_limit = models.IntegerField()
    has_passed_limit = models.BooleanField()