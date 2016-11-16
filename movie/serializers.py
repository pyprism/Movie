from rest_framework import serializers
from .models import Movie
from .models import Hiren


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'


class HirenSerializer(serializers.ModelSerializer):
    movie = MovieSerializer()

    class Meta:
        model = Hiren
        fields = ('movie', 'id', 'watched_full', 'rating', 'source', 'video_quality', 'watched_at')

    def create(self, validated_data):
        movie_data = validated_data.pop('movie')
        movie = Movie.objects.create(**movie_data)
        hiren = Hiren.objects.create(movie=movie, **validated_data)
        return hiren

