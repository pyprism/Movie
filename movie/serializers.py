from rest_framework import serializers
from .models import Movie
from .models import Hiren
from .models import MovieType


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie


class HirenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hiren


class MovieTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieType
