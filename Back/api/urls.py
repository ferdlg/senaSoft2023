from django.urls import path
from api.Controllers.empleadosView import EmpleadosView
from api.Controllers.departamentoView import obtener_departamentos
from api.Controllers.ciudadesView import obtener_ciudades_departamento
from api.Controllers.filtroCiudadesView import filtro_ciudades
from api.Controllers.tipoDocumentoView import mostrar_tipo_documento

urlpatterns=[
    path('empleados/', EmpleadosView.as_view(), name='empleados_list'),
    path('empleados/<int:id>/', EmpleadosView.as_view(), name='empleados_process'), #url para un unico empleado 
    path('empleadoUpdate/<int:id>/', EmpleadosView.as_view(), name='empleados_process'), #url para un unico empleado actualizacion

    path('departamentos/', obtener_departamentos, name='obtener_departamentos'),
    path('ciudades/', obtener_ciudades_departamento, name='obtener_ciudades_departamento'),
    path('filtro/<int:id_departamento>/', filtro_ciudades, name='filtro_ciudades'),
    path('Tipo_documento/', mostrar_tipo_documento, name='Tipo_documentos_mostrar'),
]