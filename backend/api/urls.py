from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import RecipeViewSet
from django.conf import settings
from django.contrib.staticfiles.urls import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# API Version
api_version = 'v1/'

router = routers.DefaultRouter()
router.register(api_version + 'recipes', RecipeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)