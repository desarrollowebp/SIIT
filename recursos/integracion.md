# Notas sobre la integracion de modulos

Las siguientes notas fueron derivadas de pruebas superficiales de cada uno
de los modulos enlistados. Los modulos que no esten enlistados no tienen algun
punto a mencionar.

Las pruebas fueron realizadas en una computadora portatil y no en un dispositivo
movil; probando los modulos en este ultimo, pudiera generar mas puntos a tratar.

Si la nota tiene un *?* al final, significa que el modulo pudiera no ser el
originario que causo el punto que la nota dice.


## `menu-h`
- Enlaces de menu lateral no funcionan
- Enlace de nombre no dirige a la raiz


## `login`
- Enlace es el mismo que en el maquetado


## `datos-escolares`
- No se elimino mensaje por defecto
- Estilo de semestres deslizables esta desfazado
- Problemas con iconos


## `verificacion-beca`
- El boton de cerrar redirige a un URI del SIIT actual


## `horario`
- El icono del menu es de color amarillo


## `calificaciones-examenes`
- El icono del menu es de color amarillo ?


## `calificaciones-parciales`
- El icono del menu es de color amarillo ?
- Demasiados conflictos


## `residencias`
- `package-lock.json` tiene artefactos de los conflictos
- El color de la fuente en la caja de titulo no es muy contrastante


## `tutorias`
- Bootstrap framework fue agregado al `index.html`
- Libreria de jQuery fue agregada al `index.html`


## `seleccion-materias`
- Codigo de colores tapa titulo


## `preficha-pago`
- Referencia a scripts de modulos de node de forma relativa en `index.html`
- Instrucciones no se vuelven a colapsar
- Impresion muestra elemento debajo del modal


## `horario-reinscripcion`
- Libreria de jQuery fue agregada al `index.html`


## `grupos-cargados`
- Efecto de *hover* en pestañas de semestre:
  - Desplaza secciones debajo de las pestañas cuanto *Todos Semestres* esta seleccionado
  - Se comporta *raro* con una seleccion de un semestre del 1 al 9 cuando se posiciona en la mitad inferior


## `extraescolar`
- Las opciones en el modal no modifican la seleccion


## `evaluacion-docente`
- Los cambios que se realizaron para arreglar `master` afectan el modulo
- Las preguntas no son suficientes y no tiene relacion con la encuesta actual
- Los *radio inputs* no limitan la seleccion a uno


## `auditoria-servicio`
- Componente `centro-info` se muestra sin contenido relevante
