from django.shortcuts import render
from rest_framework import viewsets
from .models import RecipeModel
from .serializers import RecipeSerializer


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = RecipeModel.objects.all()
    serializer_class = RecipeSerializer
