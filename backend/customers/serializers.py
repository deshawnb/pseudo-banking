from rest_framework import serializers
from .models import Customer

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        feilds = ['id', 'user', 'first_name', 'last_name', 'street_address', 'city', 'state', 'zip_code', 'membership_history']
        depth = 1