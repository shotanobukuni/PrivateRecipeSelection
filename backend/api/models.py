from django.db import models


class RecipeModel(models.Model):
    """
    Recipe Model
    """
    class Meta:
        db_table = 'Recipes'

    name = models.CharField(max_length=50)
    context = models.TextField()
    # image = models.ImageField(upload_to='', null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name