from rest_framework import serializers
from .models import BankingAccount

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankingAccount
        fields = ['id', 'cutomer', 'account_type', 'balance', 'budget']
        depth = 1