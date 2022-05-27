from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.get_all),
    path('', views.customer_info),
    path('<pk>/', views.customers_by_detail)
]