from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.get_all),
    path('', views.transaction_info),
    path('<pk>/', views.transactions_by_detail)
]