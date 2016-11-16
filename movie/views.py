from django.shortcuts import render
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from .serializers import HirenSerializer, MovieSerializer, MovieTypeSerializer, BunnySerializer
from .models import Hiren, Movie, MovieType
from rest_framework.response import Response
from rest_framework import status


class MovieViewset(viewsets.ModelViewSet):
    """
    API endpoint that allows movie to be created, updated ,viewed and deleted
    """
    queryset = Hiren.objects.all()
    permission_classes = (IsAuthenticated,)
    authentication_classes = (SessionAuthentication, BasicAuthentication, JSONWebTokenAuthentication)
    serializer_class = HirenSerializer

    def create(self, request, *args, **kwargs):
        bunny = BunnySerializer(data=self.request.DATA)
        if bunny.is_valid():
            x = bunny.save()
            return Response(x, status.HTTP_201_CREATED)
        else:
            return Response('error', status.HTTP_400_BAD_REQUEST)