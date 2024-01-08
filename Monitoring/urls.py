from django.urls import path
from .views import MemberView

urlpatterns = [
    path('/home', MemberView.as_view()),
]