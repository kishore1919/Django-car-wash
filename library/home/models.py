from django.db import models

# Create your models here.

class Booking(models.Model):
    name = models.CharField(max_length=20)
    number = models.CharField(max_length=10)
    address = models.TextField()
    description = models.TextField()


    def __str__(self):
        return self.name







