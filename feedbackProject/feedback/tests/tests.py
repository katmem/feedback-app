from django.test import TestCase
from rest_framework import status
from rest_framework.test import APITestCase
import json
from ..models import Feedback
from ..serializers import FeedbackSerializer

class FeedbackTestModel(APITestCase):
    """ Class to test the model Feedback """

    def setUp(self):
        self.data = Feedback.objects.create(title="Test Title", summary="Test Summary")
    

    def test_add_feedback(self):
        """ Test if adding a feedback works """

        previous_count = Feedback.objects.all().count()  
        url = "http://127.0.0.1:8000/add-feedback/"
        serializer = FeedbackSerializer(self.data)

        response = self.client.post(url, serializer.data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Feedback.objects.all().count(), previous_count+1)
        self.assertEqual(json.loads(response.content.decode("utf-8"))["title"], "Test Title")
        self.assertEqual(json.loads(response.content.decode("utf-8"))["summary"], "Test Summary")


    def test_feedbacks_url(self):
        """ Test if the feedbacks page is successfully fetched and the feedbacks returned are correct """

        feedbacks = Feedback.objects.all()
        serializer = FeedbackSerializer(feedbacks, many=True)

        response = self.client.get("http://localhost:8000/feedbacks/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content.decode("utf-8"), json.dumps(serializer.data))
