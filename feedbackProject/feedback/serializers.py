""" Serializers declaration """
from rest_framework import serializers
from .models import Feedback

class FeedbackSerializer(serializers.ModelSerializer):
    """ Declaration of a serializer for the Feedback model """
    class Meta:
        """ Import all fields from Feedback model """
        model = Feedback
        fields = "__all__"
