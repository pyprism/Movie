from django.db import models


class Movie(models.Model):
    name = models.CharField(max_length=800, unique=True)
    watched = models.IntegerField(default=1)
    watched_full = models.BooleanField(default=True)
    rating = models.IntegerField()
    source = models.CharField(max_length=500, null=True)
    imdb_rating = models.IntegerField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class WatchTime(models.Model):
    movie = models.ForeignKey(Movie)
    watched_at = models.DateField()


class MovieType(models.Model):
    movie = models.ForeignKey(Movie)
    movie_choice = (
        ('Act', 'Action'),
        ('Ani', 'Animation'),
        ('Com', 'Comedy'),
        ('Doc', 'Documentary'),
        ('Fam', 'Family'),
        ('FN', 'Film-Noir'),
        ('Hor', 'Horror'),
        ('Mus', 'Musical'),
        ('Rom', 'Romance'),
        ('Spo', 'Sport'),
        ('War', 'War'),
        ('Adv', 'Adventure'),
        ('Bio', 'Biography'),
        ('Cri', 'Crime'),
        ('Dra', 'Drama'),
        ('Fan', 'Fantasy'),
        ('His', 'History'),
        ('Mus', 'Music'),
        ('Mys', 'Mystery'),
        ('Sci', 'Sci-Fi'),
        ('Thr', 'Thriller'),
        ('Western', 'Western'),
    )
    movie_type = models.CharField(max_length=3, choices=movie_choice)
