from rest_framework import serializers
from .models import Budget

class BudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = ['id', 'user', 'user_id', 'budget_name', 'budget_limit']
        depth = 1

    user_id = serializers.IntegerField(write_only=True)