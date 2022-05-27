from django.db import models
from account_types.models import AccountType
from budgets.models import Budget
from customers.models import Customer

# Create your models here.
class BankingAccount(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    account_type = models.ForeignKey(AccountType, on_delete=models.CASCADE)
    balance = models.IntegerField()
    budget = models.ForeignKey(Budget, on_delete=models.CASCADE)