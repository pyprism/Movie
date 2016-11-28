from django.test import TestCase, TransactionTestCase
from django.utils.timezone import localtime, now
from rest_framework.test import APIRequestFactory, APIClient
from django.contrib.auth.models import User
from .models import Movie, Hiren
from freezegun import freeze_time


class ModelTest(TransactionTestCase):
    """
    Test all models
    """
    current_date = localtime(now()).date()
    reset_sequences = True

    @freeze_time("2012-01-14")
    def setUp(self):
        movie = Movie.objects.create(
            name="Schindler's List",
            imdb_rating=9,
            movie_type='His',
        )

    def test_movie_model(self):
        mov = Movie.objects.all()
        print(mov)