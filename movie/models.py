from django.db import models


class Movie(models.Model):
    name = models.CharField(max_length=800, unique=True)
    imdb_rating = models.IntegerField(null=True)
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
        ('Wes', 'Western'),
    )
    movie_type = models.CharField(max_length=3, choices=movie_choice)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Hiren(models.Model):
    movie = models.ForeignKey(Movie)
    watched_full = models.BooleanField(default=True)
    rating = models.IntegerField()
    source = models.CharField(max_length=500, null=True)
    watched_at = models.DateField()
    quality_choice = (
        ('HD', 'HD'),
        ('Cam', 'Cam'),
        ('Dvd', 'DVD'),
        ('480', '480'),
        ('720', '720'),
        ('108', '1080'),
    )
    video_quality = models.CharField(max_length=3, choices=quality_choice)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
