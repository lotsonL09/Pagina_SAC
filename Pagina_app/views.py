from django.shortcuts import render
from .models import Measurements

# Create your views here.
#def inicio(request):
    #cursos_listados=Curso.objects.all()[:5]
    #cursos_listados=Measurements.objects.all()
    #cursos_listados=Curso.objects.all().order_by('creditos')
    #cursos_listados=Curso.objects.filter(nombre='CDI')
    #cursos_listados=Curso.objects.filter(creditos__gte=4) #creditos mayores a cuatro lte para menores a
    #cursos_listados=Curso.objects.filter(nombre__contains='I')
    #return render(request, 'paginas/gestion_curso.html',{"cursos":cursos_listados} ) #bien

def prototipos (request):
    while True:
        datos=Measurements.objects.all()
        cantidad=len(datos)
        dato_obtenido=Measurements.objects.get(id=cantidad)
        # n=len(temperatura)
        # dato=temperatura.objects.get(id=n)
        return render(request,'paginas/inicio.html',{'dato':dato_obtenido})


def graficos(request):
    return render(request,'paginas/base.html') #por el momento va a dar la pestaña original del proyecto

def pestaña_2(request):
    return render(request,'paginas/pestaña_2.html')
    # while True:
    #     temperatura=Measurements.objects.all()
    #     n=len(temperatura)
    #     dato=temperatura[n-1]
    #     return render(request,'paginas/pestaña_2.html',{'dato':dato} )
    