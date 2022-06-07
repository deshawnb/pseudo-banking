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

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def transaction_info(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = TransactionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        transaction = Transaction.objects.filter(user_id=request.user.id)
        serializer = TransactionSerializer(transaction, many=True)
        return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated]) 
def transactions_by_detail(request, pk):
    if request.method == "GET":
        transaction = Transaction.objects.filter(bank_account_id=pk)
        serializer = TransactionSerializer(transaction, many=True)
        return Response(serializer.data)
    # elif request.method == 'PUT':
    #     serializer = TransactionSerializer(transaction, data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     return Response(serializer.data, status=status.HTTP_200_OK)
    # elif request.method == 'DELETE':
    #     transaction.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)