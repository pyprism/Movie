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


class MovieViewTest(TransactionTestCase):
    """
    Test movie viewset
    """
    reset_sequences = True
    current_date = localtime(now()).date()

    @freeze_time("2012-01-14")
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user('hiren', 'a@b.com', 'bunny')
        self.client.force_authenticate(user=self.user)
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

    def test_login_works(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.get('/api/movies/')
        self.assertEqual(response.status_code, 200)

        self.client.logout()
        response = self.client.get('/api/movies/')
        self.assertEqual(response.status_code, 403)

    @freeze_time("2012-01-14")
    def test_new_movie_creation_works(self):
        response = self.client.post('/api/movies/', format='json', data={
            'movie': {
                'name': 'Hiren',
                'imdb_rating': '10',
                'movie_type': 'Rom',
            },
            'watched_full': True,
            'rating': '10',
            'source': 'nowhere!',
            'video_quality': '108',
            'watched_at': self.current_date
        })
        self.assertEqual(response.json(), {'movie': {'imdb_rating': 10, 'name': 'Hiren', 'id': 2,
                                                     'created_at': '2012-01-14T00:00:00Z',
                                                     'updated_at': '2012-01-14T00:00:00Z',
                                                     'movie_type': 'Rom'}, 'rating': 10, 'id': 2, 'source': 'nowhere!',
                                           'watched_at': str(self.current_date), 'watched_full': True, 'video_quality': '108'})

    @freeze_time("2012-01-14")
    def test_return_correct_movie_object(self):
        response = self.client.get('/api/movies/1/')
        self.assertEqual(response.json(), {'watched_full': True, 'video_quality': 'HD',
                                           'watched_at': str(self.current_date), 'movie':
                                               {'imdb_rating': 9, 'movie_type': 'His',
                                                'created_at': '2012-01-14T00:00:00Z',
                                                'updated_at': '2012-01-14T00:00:00Z',
                                                'name': "Schindler's List", 'id': 1},
                                           'rating': 10, 'id': 1, 'source': 'DVD disk'})

    @freeze_time("2012-01-14")
    def test_update_works(self):
        response = self.client.put('/api/movies/1/', format='json', data={
            'movie': {
                'name': "Schindler's List",
                'imdb_rating': '9',
                'movie_type': 'His',
            },
            'watched_full': False,
            'rating': '10',
            'source': 'DVD disk',
            'video_quality': 'HD',
            'watched_at': self.current_date
        })
        self.assertEqual(response.json(), {'watched_full': False, 'movie': {'created_at': '2012-01-14T00:00:00Z',
                                                                            'movie_type': 'His', 'id': 1,
                                                                            'imdb_rating': 9, 'name': "Schindler's List",
                                                                            'updated_at': '2012-01-14T00:00:00Z'},
                                           'video_quality': 'HD', 'id': 1, 'watched_at': str(self.current_date), 'source': 'DVD disk', 'rating': 10})
