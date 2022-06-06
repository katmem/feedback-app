""" Views declaration """
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from .models import Feedback
from .serializers import FeedbackSerializer

@api_view(['POST'])
def add_feedback(request):
    """ This view responds only to POST requests and is used for adding new feedbacks. """
    if request.method == 'POST':
        feedback_data = JSONParser().parse(request)
        feedback_serializer = FeedbackSerializer(data=feedback_data)
        if feedback_serializer.is_valid():
            feedback_serializer.save()
            return JsonResponse(feedback_serializer.data, status=status.HTTP_201_CREATED, safe=False)
        return JsonResponse(feedback_serializer.errors, status=status.HTTP_400_BAD_REQUEST, safe=False)

@api_view()
def get_all_feedbacks(request):
    """ This view responds only to GET requests and is used for getting all the submitted feedbacks """
    feedbacks = Feedback.objects.all()
    if request.method == 'GET':
        feedback_serializer = FeedbackSerializer(feedbacks, many=True)
        return JsonResponse(feedback_serializer.data, safe=False)
    