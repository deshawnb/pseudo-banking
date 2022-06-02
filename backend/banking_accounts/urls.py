from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.get_all),
    path('', views.user_account),
    path('<pk>/', views.accounts_by_detail)
]