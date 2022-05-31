from rest_framework import serializers
from .models import Budget

class BudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = ['id', 'customer', 'budget_limit', 'has_passed_limit']
        depth = 1