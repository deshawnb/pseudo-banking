from rest_framework import serializers
from .models import Withdrawal

class WithdrawalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Withdrawal
        fields = ['id', 'banking_account', 'amount_withdrawn']
        depth = 1