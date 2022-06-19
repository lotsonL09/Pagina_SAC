from django.db import models

# Create your models here.

class Curso(models.Model):
    nombre=models.CharField(max_length=30)
    creditos=models.PositiveSmallIntegerField()

class Measurements(models.Model):
    date = models.DateField(blank=True, null=True)
    time = models.TimeField(blank=True, null=True)
    prototype_id = models.IntegerField(blank=True, null=True)
    temperature = models.FloatField(blank=True, null=True)
    humidity = models.FloatField(blank=True, null=True)
    gas = models.FloatField(blank=True, null=True)
    pm = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'measurements'