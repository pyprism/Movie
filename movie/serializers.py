from rest_framework import serializers
from .models import Movie
from .models import Hiren


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'


class HirenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hiren
        fields = '__all__'


class BunnySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=800)
    imdb_rating = serializers.IntegerField(max_value=10, min_value=0)
    watched_full = serializers.BooleanField(default=True)
    rating = serializers.IntegerField(max_value=10, min_value=0)
    source = serializers.CharField(max_length=500, allow_blank=True)
    watched_at = serializers.DateField()
    quality_choice = (
        ('HD', 'HD'),
        ('Cam', 'Cam'),
        ('Dvd', 'DVD'),
        ('480', '480'),
        ('720', '720'),
        ('108', '1080'),
    )
    video_quality = serializers.ChoiceField(choices=quality_choice)
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
    movie_type = serializers.ChoiceField(choices=movie_choice)

    def save(self):
        movie = Movie.objects.create(name=self.validated_data['name'],
                                     imdb_rating=self.validated_data['imdb_rating'],
                                     movie_type=self.validated_data['movie_type'])
        Hiren.objects.create(movie=movie,
                             watched_full=self.validated_data['watched_full'],
                             rating=self.validated_data['rating'],
                             source=self.validated_data['source'],
                             watched_at=self.validated_data['watched_at'],
                             video_quality=self.validated_data['video_quality'])
