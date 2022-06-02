from django.db import models
from transaction_types.models import TransactionType
from authentication.models import User

# Create your models here.
class Transaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    transaction_type = models.ForeignKey(TransactionType, on_delete=models.CASCADE)
    transaction_name = models.CharField(max_length=100)
    amount_transferred = models.IntegerField()
    time_of_transaction = models.DateTimeField(auto_now_add=True)
