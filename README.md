# SIIT | Desarrollo Web Profesional


## Aviso importante
Para el lunes deben tener clonado el repositorio en su computadora, ya que se explicara el
lunes conceptos importantes. Recuerden que se esta tomando nota de todo lo que se entrega.


## Recordatorio
Recuerden avisar a sus compañeros faltantes que entren a la plataforma para que se vayan
familiarizado y haciendo los cambios de sus respectivos modulos.


## Archivos del proyecto
Todos los archivos que se han subido de sus modulos se han añadido a este proyecto
en el directorio de [DesarrolloAlumnos](DesarrolloAlumnos).


## Uso de iconos Fontastic
Se agrego una coleccion de iconos para el uso global del proyecto, puedes encontrar la lista de
iconos disponibles en el archivo [iconos-fontastic.pdf](recursos/iconos-fontastic.pdf) localizado
en la carpeta de [recursos](recursos).

Para utilizar un icono, realiza lo siguiente:
- Busca una palabra clave en el PDF
- Copia el nombre del icono
- Añade un `<span>` en donde lo quieras utilizar
- Agrega una clase `icon` al `<span>`
- Utiliza el nombre del icono como segunda clase, pero añade un prefijo `icon-`
- Debera quedar algo similar a lo siguiente si yo quiero utilizar el icono *list*:

```html
<span class="icon icon-list"></span>
```

> NOTA: No necesitas agregar nada dentro del `<span>`.

Esta contribucion fue hecha por Arturo Rangel Muñoz | 15040581.

## Lista de ramas
|Modulo del SIIT|Rama|
|---|---|
|Login|login|
|Incio|inicio|
|Datos escolares|datos-escolares|
|Verificacion Datos para Beca|verificacion-beca|
|Kardex de Calificaciones|kardex-calificaciones|
|Horario del Alumno|horario|
|Calificaciones de Examenes Globales o Especiales|calificaciones-examenes|
|Calificaciones Parciales|calificaciones-parciales|
|Residencias|residencias|
|Tutorias|tutorias|
|Seleccion de Materias|seleccion-materias|
|Preficha de Pago|preficha-pago|
|Horario de Reinscripcion|horario-reinscripcion|
|Grupos Cargados|grupos-cargados|
|Extraescolar|extraescolar|
|Evaluacion Docente|evaluacion-docente|
|Auditoria de Servicio|auditoria-servicio|

> NOTA: Las ramas tienen el mismo nombre que el componenete perteneciente al modulo del SIIT.


## Guias
- [Guia de `git`](guias/git.md)
- [Guia de componentes](guias/componentes.md)


## Guia rapida

### Clona el proyecto
```
git clone https://github.com/desarrollowebp/SIIT.git
```

### Posicionamiento en directorio
```
cd SIIT
```

### Crea localmente tu rama y cambiate a ella
```
git checkout -b nombre-del-modulo-del-siit
```

### Baja los cambios de la rama
```
git pull origin nombre-del-modulo-del-siit
```

### Instalacion del proyecto
```
npm install
```

### Ejecucion del proyecto
```
npm start
```

### Visita el proyecto
http://localhost:4200/
