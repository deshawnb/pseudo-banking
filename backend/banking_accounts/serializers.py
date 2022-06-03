from rest_framework import serializers
from .models import BankingAccount

class BankingAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankingAccount
        fields = ['id', 'user', 'user_id', 'account_name', 'account_type', 'account_type_id', 'balance', 'budget', 'budget_id']
        depth = 1

    user_id = serializers.IntegerField(write_only=True)
    account_type_id = serializers.IntegerField(write_only=True)
    budget_id = serializers.IntegerField(write_only=True)