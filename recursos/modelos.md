# Modelos MongoDB


### maestros
- _id
- nombre

### materias
- _id
- nombre
- codigo
- creditos
- cadenas

### grupos
- _id
- letra

### semestres
- _id
- semestre
- importePago

### carreras
- _id
- carrera

### clases
- _id
- idMaestro
- idMateria
- idSemestre
- idCarrera
- idGrupo
- horario
- salon

### alumnos
- _id
- numeroControl
- nombre
- datosPersonales:{}
- adeudos:{}
- descuento
- semestre
- carrera


### kardex
- _id
- idMateria
- idAlumno
- calificacion
- tipoEvaluacion
- periodo
- idCodigoColor

### codigosColores
- _id
- codigo
- color

### periodosEscolares
- _id
- periodo

### extraescolares
- _id
- nombre
- ...

### preguntasEvaluaciones
### resultadosEvaluaciones

### adeudos

### datosBancos
- _id
- sucursal
- referencia

#reticula

#gruposCargados
- _id
- clases:[]

### tutorias??

### residencias ??


### preguntasAuditoria
- _id
- ...
- departamento

### resultadosAuditoria
- _id
- departamento


### calificacionesParciales
- _id
- [calificaciones]

### calificacionesExamenes
- _id
- calificacion
- tipo
