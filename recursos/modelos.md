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



###MODELO para seleccion materiasSeleccionadas
##Semestres materias
-semestres = [ [ {} ] ]
-codigo
-nombre
-uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
-tipoEvaluacion,
-codColor ,
-cadenas:[]

Incluye cada semestre con sus materias respectibas

semestres= [ [ {
                    codigo:"X", nombre:"Ejemplo 2",
                    numeroCreditos:'x',
                    uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
                    tipoEvaluacion:"Ordinario",
                    codColor:'codColorX' ,
                    cadenas:["xzy","xzy"]
                    },
                    {
                     codigo:"XZ", nombre:"Ejemplo",
                     numeroCreditos:'x',
                     uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
                     tipoEvaluacion:"Ordinario",
                     codColor:'codColorX' ,
                     cadenas:["xzy","xzy"]
                    }
                 ],
                 [ {
                    codigo:"XXX", nombre:"Ejemplo",
                    numeroCreditos:'x',
                    uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
                    tipoEvaluacion:"Ordinario",
                    codColor:'codColorX' ,
                    cadenas:["xzy","xzy"]
                    },
                    {
                    codigo:"XXX", nombre:"Ejemplo",
                    numeroCreditos:'x',
                    uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
                    tipoEvaluacion:"Ordinario",
                    codColor:'codColorX' ,
                    cadenas:["xzy","xzy"]
                    }
                  ],
                  [ {
                     codigo:"XXX", nombre:"Ejemplo",
                     numeroCreditos:'x',
                     uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
                     tipoEvaluacion:"Ordinario",
                     codColor:'codColorX' ,
                     cadenas:["xzy","xzy"]
                     },
                     {
                     codigo:"XXX", nombre:"Ejemplo",
                     numeroCreditos:'x',
                     uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
                     tipoEvaluacion:"Ordinario",
                     codColor:'codColorX' ,
                     cadenas:["xzy","xzy"]
                     }
                   ],
                   [ {
                                     codigo:"XXX", nombre:"Ejemplo",
                                     numeroCreditos:'x',
                                     uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
                                     tipoEvaluacion:"Ordinario",
                                     codColor:'codColorX' ,
                                     cadenas:["xzy","xzy"]
                                     },
                                     {
                                      codigo:"XXX", nombre:"Ejemplo",
                                      numeroCreditos:'x',
                                      uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
                                      tipoEvaluacion:"Ordinario",
                                      codColor:'codColorX' ,
                                      cadenas:["xzy","xzy"]
                                     }
                                  ],
                                  [ {
                                     codigo:"XXX", nombre:"Ejemplo",
                                     numeroCreditos:'x',
                                     uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
                                     tipoEvaluacion:"Ordinario",
                                     codColor:'codColorX' ,
                                     cadenas:["xzy","xzy"]
                                     },
                                     {
                                     codigo:"XXX", nombre:"Ejemplo",
                                     numeroCreditos:'x',
                                     uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
                                     tipoEvaluacion:"Ordinario",
                                     codColor:'codColorX' ,
                                     cadenas:["xzy","xzy"]
                                     }
                                   ],
                                   [ {
                                      codigo:"XXX", nombre:"Ejemplo",
                                      numeroCreditos:'x',
                                      uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
                                      tipoEvaluacion:"Ordinario",
                                      codColor:'codColorX' ,
                                      cadenas:["xzy","xzy"]
                                      },
                                      {
                                      codigo:"XXX", nombre:"Ejemplo",
                                      numeroCreditos:'x',
                                      uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
                                      tipoEvaluacion:"Ordinario",
                                      codColor:'codColorX' ,
                                      cadenas:["xzy","xzy"]
                                      }
                                    ],
                                    [ {
                                                      codigo:"XXX", nombre:"Ejemplo",
                                                      numeroCreditos:'x',
                                                      uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
                                                      tipoEvaluacion:"Ordinario",
                                                      codColor:'codColorX' ,
                                                      cadenas:["xzy","xzy"]
                                                      },
                                                      {
                                                       codigo:"AAA", nombre:"Ejemplo",
                                                       numeroCreditos:'x',
                                                       uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
                                                       tipoEvaluacion:"Ordinario",
                                                       codColor:'codColorX' ,
                                                       cadenas:["xzy","xzy"]
                                                      }
                                                   ],
                                                   [ {
                                                      codigo:"AAA", nombre:"Quimica",
                                                      numeroCreditos:'x',
                                                      uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
                                                      tipoEvaluacion:"Ordinario",
                                                      codColor:'codColorX' ,
                                                      cadenas:["xzy","xzy"]
                                                      },
                                                      {
                                                      codigo:"XY", nombre:"Ejemplo",
                                                      numeroCreditos:'x',
                                                      uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
                                                      tipoEvaluacion:"Ordinario",
                                                      codColor:'codColorX' ,
                                                      cadenas:["xzy","xzy"]
                                                      }
                                                    ],
                                                    [ {
                                                       codigo:"XXX", nombre:"Ejemplo",
                                                       numeroCreditos:'x',
                                                       uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
                                                       tipoEvaluacion:"Ordinario",
                                                       codColor:'codColorX' ,
                                                       cadenas:["xzy","xzy"]
                                                       },
                                                       {
                                                       codigo:"XXX", nombre:"Ejemplo",
                                                       numeroCreditos:'x',
                                                       uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
                                                       tipoEvaluacion:"Ordinario",
                                                       codColor:'codColorX' ,
                                                       cadenas:["xzy","xzy"]
                                                       }
                                                     ]

]; //dinamica

##Maestros
-maestros [{{}}]
-nombre
-materias codigo nombreMateria,grupo,cupo,horario


maestros= [
          {    nombre:"Martin",materias:[
               {codigo:"XZ",nombre:"algrebra",grupo:"XZ",cupo:30,horario:{lunes:{salon:["sc5"],hora:["20:30"]},martes:{salon:["sc5"],hora:["20:30"]},miercoles:{salon:["sc5"],hora:["20:30"]},jueves:{salon:["sc5"],hora:["20:30"]},viernes:{salon:["sc5"],hora:["20:30"]},sabado:{salon:["sc5"],hora:["20:30"]}}},
               {codigo:"XY",nombre:"algrebra2",grupo:"XY",cupo:30,horario:{lunes:{salon:["sc5"],hora:["20:30"]},martes:{salon:["sc5"],hora:["20:30"]},miercoles:{salon:["sc5"],hora:["20:30"]},jueves:{salon:["sc5"],hora:["20:30"]},viernes:{salon:["sc5"],hora:["20:30"]},sabado:{salon:["sc5"],hora:["20:30"]}}}
                                        ]
           },
           {    nombre:"Vero",materias:[
                {codigo:"XZ",nombre:"algrebra",grupo:"XZ",cupo:30,horario:{lunes:{salon:["sc5"],hora:["20:30"]},martes:{salon:["sc5"],hora:["20:30"]},miercoles:{salon:["sc5"],hora:["20:30"]},jueves:{salon:["sc5"],hora:["20:30"]},viernes:{salon:["sc5"],hora:["20:30"]},sabado:{salon:["sc5"],hora:["20:30"]}}},
                {codigo:"X",nombre:"algrebra2",grupo:"XY",cupo:30,horario:{lunes:{salon:["sc5"],hora:["20:30"]},martes:{salon:["sc5"],hora:["20:30"]},miercoles:{salon:["sc5"],hora:["20:30"]},jueves:{salon:["sc5"],hora:["20:30"]},viernes:{salon:["sc5"],hora:["20:30"]},sabado:{salon:["sc5"],hora:["20:30"]}}}
                                         ]
            },
            {    nombre:"Krak",materias:[
                 {codigo:"AAA",nombre:"algrebra",grupo:"XZ",cupo:30,horario:{lunes:{salon:["sc5"],hora:["20:30"]},martes:{salon:["sc5"],hora:["20:30"]},miercoles:{salon:["sc5"],hora:["20:30"]},jueves:{salon:["sc5"],hora:["20:30"]},viernes:{salon:["sc5"],hora:["20:30"]},sabado:{salon:["sc5"],hora:["20:30"]}}},
                 {codigo:"XY",nombre:"algrebra2",grupo:"XY",cupo:30,horario:{lunes:{salon:["sc5"],hora:["20:30"]},martes:{salon:["sc5"],hora:["20:30"]},miercoles:{salon:["sc5"],hora:["20:30"]},jueves:{salon:["sc5"],hora:["20:30"]},viernes:{salon:["sc5"],hora:["20:30"]},sabado:{salon:["sc5"],hora:["20:30"]}}}
                                          ]
             }
         ];


##CargaActualSemestre
-cargasemestreactual= [{}];
-numeroCreditos
-uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0
-tipoEvaluacion
-nombreMateria
-nombreMaestro
-grupo
-cupo
-horario = { { { [] },{ [] } } x7 dias }

Guarna N materias seleccionadas ya con la relacion materias maestros

cargaSemestreActual=[

{
numeroCreditos:'x',
uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
tipoEvaluacion:"Ordinario",codigo:"X",
nombreMateria:"algrebra",nombreMaestro:"Juan",grupo:"X",cupo:30,
horario:{lunes:{salon:["sc5"],hora:["20:30"]},martes:{salon:["sc5"],hora:["20:30"]},miercoles:{salon:["sc5"],hora:["20:30"]},jueves:{salon:["sc5"],hora:["20:30"]},viernes:{salon:["sc5"],hora:["20:30"]},sabado:{salon:["sc5"],hora:["20:30"]}}
}
];

##Kardex
-numeroCreditos: [[[{},{}]]]
-uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0
-Codigo
-nombre (nombremateria)
-nombreMaestro
-grupo
-horario { { { [] },{ [] } } x7 dias }
-periodosEscolares-
-promSem
-creditosAprob

Guarda N cargas y la carga incluye un solo promedio
kardex=[
[

[
{numeroCreditos:'x',
uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
tipoEvaluacion:"Ordinario",codigo:"X",
nombre:"algrebra",nombreMaestro:"Juan",grupo:"X",cupo:30,
horario:{lunes:{salon:["sc5"],hora:["20:30"]},martes:{salon:["sc5"],hora:["20:30"]},miercoles:{salon:["sc5"],hora:["20:30"]},jueves:{salon:["sc5"],hora:["20:30"]},viernes:{salon:["sc5"],hora:["20:30"]},sabado:{salon:["sc5"],hora:["20:30"]}}
}],{periodoEsc:"",promSem:10.5,creditosAprob:""}

]

];

gpsDisponibles = [];
materiasSeleccionadas=[];
