import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-seleccion-materias',
  templateUrl: './seleccion-materias.component.html',
  styleUrls: ['./seleccion-materias.component.css']
})
export class SeleccionMateriasComponent implements OnInit {

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

    maestros= [
              {    nombre:"Martin",materias:[
                   {codigo:"XZ",nombre:"algrebra",grupo:"XZ",cupo:30,horario:{lunes:{salon:"sc5",hora:"20:30"},martes:{salon:"sc5",hora:"20:30"},miercoles:{salon:"sc5",hora:"20:30"},jueves:{salon:"sc5",hora:"20:30"},viernes:{salon:"sc5",hora:"20:30"},sabado:{salon:"sc5",hora:"20:30"}}},
                   {codigo:"XY",nombre:"algrebra2",grupo:"XY",cupo:30,horario:{lunes:{salon:"sc5",hora:"20:30"},martes:{salon:"sc5",hora:"20:30"},miercoles:{salon:"sc5",hora:"20:30"},jueves:{salon:"sc5",hora:"20:30"},viernes:{salon:"sc5",hora:"20:30"},sabado:{salon:"sc5",hora:"20:30"}}}
                                            ]
               },
               {    nombre:"Vero",materias:[
                    {codigo:"XZ",nombre:"algrebra",grupo:"XZ",cupo:30,horario:{lunes:{salon:"sc3",hora:"20:31"},martes:{salon:"sc5",hora:"20:50"},miercoles:{salon:"sc5",hora:"14:30"},jueves:{salon:"sc5",hora:"20:30"},viernes:{salon:"sc5",hora:"20:30"},sabado:{salon:"sc5",hora:"20:30"}}},
                    {codigo:"X",nombre:"algrebra2",grupo:"XY",cupo:30,horario:{lunes:{salon:"sc3",hora:"20:30"},martes:{salon:"sc5",hora:"20:30"},miercoles:{salon:"sc5",hora:"20:30"},jueves:{salon:"sc5",hora:"20:30"},viernes:{salon:"sc5",hora:"20:30"},sabado:{salon:"sc5",hora:"20:30"}}}
                                             ]
                },
                {    nombre:"Krak",materias:[
                     {codigo:"AAA",nombre:"algrebra",grupo:"XZ",cupo:30,horario:{lunes:{salon:"sc5",hora:"20:30"},martes:{salon:"sc5",hora:"20:30"},miercoles:{salon:"sc5",hora:"20:30"},jueves:{salon:"sc5",hora:"20:30"},viernes:{salon:"sc5",hora:"20:30"},sabado:{salon:"sc5",hora:"20:30"}}},
                     {codigo:"XY",nombre:"algrebra2",grupo:"XY",cupo:30,horario:{lunes:{salon:"sc5",hora:"20:30"},martes:{salon:"sc5",hora:"20:30"},miercoles:{salon:"sc5",hora:"20:30"},jueves:{salon:"sc5",hora:"20:30"},viernes:{salon:"sc5",hora:"20:30"},sabado:{salon:"sc5",hora:"20:30"}}}
                                              ]
                 }
             ];



  recuperarSemestre = function() {


  }





semestre1= [{Nombre:"Calculo",totCr:"10"},
              {Nombre:"Programación orientada a obetos",totCr:"15"},
              {Nombre:"Administracion",totCr:"20"},
              {Nombre:"Química",totCr:"5"},
              {Nombre:"Taller Inv. I",totCr:"3"}
            ];
cargaSemestreActual=[
{numeroCreditos:'x',
uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
tipoEvaluacion:"Ordinario",codigo:"X",
nombre:"algrebra",nombreMaestro:"Juan",grupo:"X",cupo:30,
horario:{lunes:"17:00",martes:"17:30",miercoles:"17:30",
jueves:"17:30",viernes:"17:30",sabado:"17:30"}}];

kardex=[
[
[
{numeroCreditos:'x',
uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
tipoEvaluacion:"Ordinario",codigo:"X",
nombre:"algrebra",nombreMaestro:"Juan",grupo:"X",cupo:30,
horario:{lunes:"17:00",martes:"17:30",miercoles:"17:30",
jueves:"17:30",viernes:"17:30",sabado:"17:30"}}
],{periodoEsc:"",promSem:10.5,creditosAprob:""}
]
];
gpsDisponibles = [];
materiasSeleccionadas=[];
materiaModal="";
  modals = "modal";
  constructor() {
    this.modals = "modal";
  }
  apilarSeleccion($gpsdisp){
     let temporal={Gpo:$gpsdisp.Gpo,Prof:this.materiaModal+"-"+$gpsdisp.Prof,Hor:$gpsdisp.Hor,Lug:$gpsdisp.Lug,creditos:$gpsdisp.creditos};
    this.materiasSeleccionadas.push(temporal);
    this.cerrar();
  }
  funcMostrarGrupos($materia) {

    this.gpsDisponibles = [];
    this.modals = "visibleNo";
    this.materiaModal=$materia.nombre;
    for (let i = 0; i < this.maestros.length; i++) {
            for (let j = 0; j < this.maestros[i].materias.length; j++) {
                    console.log( this.maestros[i].materias[j].codigo);
                    if( this.maestros[i].materias[j].codigo == $materia.codigo ){
                    this.gpsDisponibles.push(
                    {Gpo:this.maestros[i].materias[j].grupo,
                     Prof:this.maestros[i].nombre,
                     Hor:this.maestros[i].materias[j].horario,
                     Lug:this.maestros[i].materias[j].cupo,
                     creditos:$materia.creditos}

                   );

                      }

             }
      }

  }
  eliminarMateria($materia) {
    this.materiasSeleccionadas.splice(this.materiasSeleccionadas.indexOf($materia),1);
  }
  cerrar(){
    this.modals="modal";
  }
  ngOnInit() {
    this.recuperarSemestre();
    $(".submenuSeleccionMaterias").click(function() {
      $(this).children("ul").slideToggle();

    }
    )

    $("ul").click(function(p) {
      p.stopPropagation();
    })

    if ($(window).width() > 720) {


      $(".submenuSeleccionMaterias").children("ul").show();



    }
    }


}
