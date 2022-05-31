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
