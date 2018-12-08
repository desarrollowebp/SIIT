# SIIT | Desarrollo Web Profesional



## DOCUMENTACION DEL PROYECTO GENERAL
https://drive.google.com/drive/u/2/folders/1Xley85hVqu5H-eBp8aOKHsUncmwbLk0M


## DOCUMENTO FINAL DEL PROYECTO
https://drive.google.com/drive/u/2/folders/1GJw2Tvgizaodcrs8KUpcB2HaSvwf8GB4


## Backend
La parte de backend se finalizo con ~221 commits, dando un total final de ~930.
Esto mas algunas partes adicionales del front-end casi duplico su numero despues de
las pruebas. Sin embargo el proyecto no se finalizara hasta su revision y posterior
examen. Sigan estudiando y experimentando con el proyecto, preferentemente despues
de sincronizar la rama de master con la rama de su modulo. Si gustan agregar alguna
nota final a este README, mencionenlo en el grupo.

### Base de Datos
Para restaurar la base de datos en su totalidad, es necesario utilizar el siguiente comando:
```sh
mongorestore -d siit backend/db
```

## Pruebas
El proyecto esta lo suficientemente listo para las pruebas. Despues de ~427 commits por
20 contribuidores se puede apreciar el trabajo realizado para llegar a este punto, pero
faltara aun mas para terminarlo. Por ahora se necesita la opinion de sus proximos usuarios.


## Acceso publico en la red

### Obtener la direccion IP de la maquina
Ejecuta el comando de `ipconfig` en Windows y `ifconfig` en Linux/OSX.

### Ejecuta el proyecto pasandole la opcion `--host`
En vez de `npm start`, utiliza `ng serve --host mi.direccion.ip`.

> NOTA: mi.direccion.ip sera la direccion IP del paso anterior.

### Visita el proyecto desde otro dispositivo
Desde tu celular visita `http://mi.direccion.ip:4200`

Esta contribucion fue hecha por Aurora Gamero Pescador | 14041403.


## Integracion
La integracion esta completa. Hay algunas notas que se pueden encontrar en el archivo de
[integracion](integracion.md) sobre sus modulos. Ya que la integracion esta en `master`
pueden bajar cambios normalmente con `git pull origin master`.

Visiten los modulos de sus compañeros, y si gustan, brinden un poco de retroalimentacion
y/o critica constructiva para mejorar la experencia del SIIT.

Como nota final (y general): muchos modulos estan bien definidos y algunos tenian excelente
funcionalidad, y a los demas les faltaba un poco para que tuvieran la funcionalidad requerida,
pero este sistema ya esta en pie. Lo siguiente seria trabajar con las *variables*, *mocks*
y *servicios* para manejar la comunicacion de datos y el estado de la aplicacion. Un enlace
de interes pudiera ser el [tutorial oficial de Angular](https://angular.io/tutorial), y la
pagina de [Angular](https://angular.io/) en si.


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
