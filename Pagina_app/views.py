from django.shortcuts import render
from .models import Curso

# Create your views here.
def inicio(request):
    #cursos_listados=Curso.objects.all()[:5]
    #cursos_listados=Curso.objects.all().order_by('-nombre')
    #cursos_listados=Curso.objects.all().order_by('creditos')
    #cursos_listados=Curso.objects.filter(nombre='CDI')
    #cursos_listados=Curso.objects.filter(creditos__gte=4) #creditos mayores a cuatro lte para menores a
    cursos_listados=Curso.objects.filter(nombre__contains='I')
    return render(request, 'paginas/gestion_curso.html',{"cursos":cursos_listados} )