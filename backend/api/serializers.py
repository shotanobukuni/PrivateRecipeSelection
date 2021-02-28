from rest_framework import serializers
from .models import RecipeModel


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeModel
        fields = '__all__'

    created_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M', read_only=True)
    updated_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M', read_only=True)