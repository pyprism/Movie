from django.shortcuts import render
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from .serializers import HirenSerializer, MovieSerializer
from .models import Hiren, Movie
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView


class MovieListView(ListAPIView):
    """
    API endpoint that return list of movies
    """
    queryset = Movie.objects.all()
    permission_classes = (IsAuthenticated,)
    authentication_classes = (SessionAuthentication, BasicAuthentication, JSONWebTokenAuthentication)
    serializer_class = MovieSerializer


class MovieViewset(viewsets.ModelViewSet):
    """
    API endpoint that allows movie to be created, updated ,viewed and deleted
    """
    queryset = Hiren.objects.all()
    permission_classes = (IsAuthenticated,)
    authentication_classes = (SessionAuthentication, BasicAuthentication, JSONWebTokenAuthentication)
    serializer_class = HirenSerializer

    def list(self, request, *args, **kwargs):
        query = Hiren.objects.all()
        serializer = HirenSerializer(query, many=True)
        return Response(serializer.data)
