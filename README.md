# Prueba Técnica de Mayoral

Realizar una aplicación web de un calendario para empleados en base al material adjunto. La prueba
deberá estar subida en un repositorio de GitHub.-

Tecnologías requeridas:
- React
- CSS (o SASS)

Funcionalidades a implementar:

* Mostrar un listado de empleados a partir del archivo "employees.json"y los días del calendario para
cada uno (calendarjson) representando los distintos tipos de días (laborables, festivos y vacaciones).
* Seleccionar, almacenar (usando localStorage ) y eliminar los días de vacaciones por empleado
haciendo click sobre el día. Los días que tengan la propiedad "tipoId":"'vacíaseránlosúnicos
editables.
* Actualizar el contador de vacaciones por empleado (situado al lado del nombre) con los dias restantes
y un máximo de 22.
* Opcional: Optimizar el renderizado y actualización de los días del calendario de forma que al
seleccionar uno el resto de dias del calendario no tenga que volver a renderizarse por completo.