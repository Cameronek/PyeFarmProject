from django.urls import path
from .views import MemberView
from .views import getNameByID

urlpatterns = [
    path('api/getNameByID', getNameByID, name='getNameByID'),
]