from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import BankingAccountSerializer
from .models import BankingAccount

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all(request):
    banking_account = BankingAccount.objects.all()
    serializer = BankingAccountSerializer(banking_account , many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_account(request):
    if request.method == 'POST':
        serializer = BankingAccountSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        banking_account = BankingAccount.objects.filter(user_id=request.user.id)
        serializer = BankingAccountSerializer(banking_account, many=True)
        return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated]) 
def accounts_by_detail(request, pk):
    banking_account = get_object_or_404(BankingAccount, pk=pk)
    if request.method == "GET":
        serializer = BankingAccountSerializer(banking_account)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = BankingAccountSerializer(banking_account, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        banking_account.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)