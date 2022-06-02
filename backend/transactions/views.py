from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import TransactionSerializer
from .models import Transaction

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all(request):
    transaction = Transaction.objects.all()
    serializer = TransactionSerializer(transaction , many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
