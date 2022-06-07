from rest_framework import serializers
from .models import Transaction

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['id', 'user', 'user_id', 'bank_account', 'bank_account_id', 'transaction_type', 'transaction_type_id', 'transaction_name', 'amount_transferred', 'time_of_transaction']
        depth = 1

    user_id = serializers.IntegerField(write_only=True)
    bank_account_id = serializers.IntegerField(write_only=True)
    transaction_type_id = serializers.IntegerField(write_only=True)
