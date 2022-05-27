from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import CustomerSerializer
from .models import Customer

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all(request):
    customer = Customer.objects.all()
    serializer = CustomerSerializer(customer , many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def customer_info(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        customer = Customer.objects.filter(user_id=request.user.id)
        serializer = CustomerSerializer(customer, many=True)
        return Response(serializer.data)