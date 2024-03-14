from django.urls import path
from .views import index

from django.urls import re_path
from django.views.generic import RedirectView


urlpatterns = [
    path('', index),
    path('plant', index),
    path('cameraview', index),
    re_path(r'^favicon\.ico$',RedirectView.as_view(url='/static/images/favicon.ico'))
]
