from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import BudgetSerializer
from .models import Budget

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all(request):
    budget = Budget.objects.all()
    serializer = BudgetSerializer(budget , many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def budget_info(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = BudgetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        budget = Budget.objects.filter(user_id=request.user.id)
        serializer = BudgetSerializer(budget, many=True)
        return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated]) 
def budgets_by_detail(request, pk):
    budget = get_object_or_404(Budget, pk=pk)
    if request.method == "GET":
        serializer = BudgetSerializer(budget)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = BudgetSerializer(budget, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        budget.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)