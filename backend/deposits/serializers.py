from rest_framework import serializers
from .models import Deposit

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deposit
        fields = ['id', 'banking_account', 'amount_deposited']
        depth = 1