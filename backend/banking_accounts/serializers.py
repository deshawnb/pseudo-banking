from rest_framework import serializers
from .models import BankingAccount

class BankingAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankingAccount
        fields = ['id', 'customer', 'account_type', 'balance', 'budget']
        depth = 1