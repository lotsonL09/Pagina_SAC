from django.shortcuts import render
from .models import Curso

# Create your views here.
def inicio(request):
    #cursos_listados=Curso.objects.all()[:5]
    #cursos_listados=Curso.objects.all().order_by('')
    return render(request, 'paginas/gestion_curso.html',{"cursos":cursos_listados} )

