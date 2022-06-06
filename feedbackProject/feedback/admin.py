""" Registration of models which will be shown in the Django admin page """
from django.contrib import admin
from .models import Feedback

admin.site.register(Feedback)
