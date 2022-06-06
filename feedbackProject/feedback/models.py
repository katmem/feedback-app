""" Models declaration """
from django.db import models

class Feedback(models.Model):
    """ Declaration of the Feedback model which includes two fields; title and summary """
    title   = models.CharField(max_length = 50, blank = False)
    summary = models.CharField(max_length = 300, blank = False)
