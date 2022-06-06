"""URLs definition and matching with views"""
from django.urls import re_path
from .views import add_feedback, get_all_feedbacks

urlpatterns = [
    re_path(r'^add-feedback/$', add_feedback),
    re_path(r'^feedbacks/$', get_all_feedbacks),
]
