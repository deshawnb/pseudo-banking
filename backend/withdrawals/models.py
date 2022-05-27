from django.db import models
from banking_accounts.models import BankingAccount

# Create your models here.

class Withdrawal(models.Model):
    banking_account = models.ForeignKey(BankingAccount,on_delete=models.CASCADE)
    ammount_withdrawn = models.IntegerField()