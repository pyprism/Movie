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

    # @freeze_time("2012-01-14")
    def setUp(self):
        movie = Movie.objects.create(
            name="Schindler's List",
            imdb_rating=9,
            movie_type='His',
        )
        Hiren.objects.create(
            movie=movie,
            rating=10,
            source="DVD disk",
            watched_at=self.current_date,
            video_quality='HD'
        )

    def test_movie_model(self):
        mov = Movie.objects.all()
        self.assertEqual(mov.count(), 1)

        mov_name = Movie.objects.get(name="Schindler's List")
        self.assertEqual(mov_name.name, "Schindler's List")

    def test_hiren_model(self):
        hiren = Hiren.objects.all()
        self.assertEqual(hiren.count(), 1)

        mov_name = Movie.objects.get(name="Schindler's List")
        movie = Hiren.objects.get(movie=mov_name)
        self.assertEqual(movie.rating, 10)