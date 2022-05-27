from django.db import models
from banking_accounts.models import BankingAccount

# Create your models here.

class Deposit(models.Model):
    banking_account = models.ForeignKey(BankingAccount,on_delete=models.CASCADE)
    amount_deposited = models.IntegerField()