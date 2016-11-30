from rest_framework import serializers
from .models import Movie
from .models import Hiren


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'
        extra_kwargs = {
            'name': {
                'validators': [],  # disable unique validator
            }
        }


class HirenSerializer(serializers.ModelSerializer):
    movie = MovieSerializer()

    class Meta:
        model = Hiren
        fields = ('movie', 'id', 'watched_full', 'rating', 'source', 'video_quality', 'watched_at')

    def create(self, validated_data):
        movie_data = validated_data.pop('movie')
        movie, created = Movie.objects.get_or_create(**movie_data)
        hiren = Hiren.objects.create(movie=movie, **validated_data)
        return hiren

    def update(self, instance, validated_data):
        movie_name = validated_data.get('movie', {}).get('name')
        if movie_name != instance.movie.name:
            instance.movie.name = movie_name
        instance.movie.imdb_rating = validated_data.get('movie', {}).get('imdb_rating')
        instance.movie.movie_type = validated_data.get('movie', {}).get('movie_type')
        instance.watched_full = validated_data.get('watched_full', instance.watched_full)
        instance.rating = validated_data.get('rating', instance.rating)
        instance.source = validated_data.get('source', instance.source)
        instance.video_quality = validated_data.get('video_quality', instance.video_quality)
        instance.watched_at = validated_data.get('watched_at', instance.watched_at)
        instance.movie.save()
        instance.save()

        return instance
