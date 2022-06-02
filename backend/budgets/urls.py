from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.get_all),
    path('', views.budget_info),
    path('<pk>/', views.budgets_by_detail)
]