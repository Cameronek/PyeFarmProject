from django.urls import path
from .views import DataView
from .views import index

from django.urls import re_path
from django.views.generic import RedirectView


urlpatterns = [
    path('', index),

    path('plant1', index),
    path('plant1/cameraview', index),
    path('plant2', index),
    path('plant3', index),
    # path('graph', index),
    path('graph/', index),
    path('data', DataView.as_view())
    re_path(r'^favicon\.ico$',RedirectView.as_view(url='/static/images/favicon.ico'))
]
