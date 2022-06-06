""" Configuration of django apps """
from django.apps import AppConfig

class FeedbackConfig(AppConfig):
    """ Configuration of the feedback app """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'feedback'
