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
                                                     ]

]; //dinamica

    maestros= [
                 [
                 "Martin",
                 [
                   {codigo:"X",Nombre:"algrebra",grupo:"X",cupo:30,horario:{lunes:"17:00",martes:"17:30",miercoles:"17:30",jueves:"17:30",viernes:"17:30",sabado:"17:30"}},
                   {codigo:"XY",Nombre:"algrebra",grupo:"XY",cupo:30,horario:{lunes:"17:00",martes:"17:30",miercoles:"17:30",jueves:"17:30",viernes:"17:30",sabado:"17:30"}},
                   {codigo:"XZ",Nombre:"algrebra",grupo:"XZ",cupo:30,horario:{lunes:"17:00",martes:"17:30",miercoles:"17:30",jueves:"17:30",viernes:"17:30",sabado:"17:30"}}
                 ]
               ],
               [
               "Kevin",
               [
                 {codigo:"X",Nombre:"algrebra",grupo:"X",cupo:30,horario:{lunes:"17:00",martes:"17:30",miercoles:"17:30",jueves:"17:30",viernes:"17:30",sabado:"17:30"}},
                 {codigo:"XY",Nombre:"algrebra",grupo:"XY",cupo:30,horario:{lunes:"17:00",martes:"17:30",miercoles:"17:30",jueves:"17:30",viernes:"17:30",sabado:"17:30"}},
                 {codigo:"XZ",Nombre:"algrebra",grupo:"XZ",cupo:30,horario:{lunes:"17:00",martes:"17:30",miercoles:"17:30",jueves:"17:30",viernes:"17:30",sabado:"17:30"}}
               ]
             ],
             [
             "Lupita",
             [
               {codigo:"XA",Nombre:"algrebra",grupo:"X",cupo:30,horario:{lunes:"17:00",martes:"17:30",miercoles:"17:30",jueves:"17:30",viernes:"17:30",sabado:"17:30"}},
               {codigo:"XA",Nombre:"algrebra",grupo:"XY",cupo:30,horario:{lunes:"17:00",martes:"17:30",miercoles:"17:30",jueves:"17:30",viernes:"17:30",sabado:"17:30"}},
               {codigo:"XA",Nombre:"algrebra",grupo:"XZ",cupo:30,horario:{lunes:"17:00",martes:"17:30",miercoles:"17:30",jueves:"17:30",viernes:"17:30",sabado:"17:30"}}
             ]
           ]


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
materiaModal="Kevin";
  modals = "modal";
  constructor() {
    this.modals = "modal";
  }
  apilarSeleccion($gpsdisp){
     let temporal={Gpo:$gpsdisp.Gpo,Prof:this.materiaModal+"-"+$gpsdisp.Prof,Hor:$gpsdisp.Hor,Lug:$gpsdisp.Lug};

    this.materiasSeleccionadas.push(temporal);
    this.cerrar();
  }
  funcMostrarGrupos($materia) {
    this.modals = "visibleNo";
    for (let i = 0; i < this.maestros.length; i++) {
            for (let j = 0; j < this.maestros[i][1].length; j++) {

              if( this.maestros[i][1][j].codigo == $materia.codigo ){
                  window.alert(this.maestros[i][1][j].horario.lunes);
               this.gpsDisponibles.push({Gpo:this.maestros[i][1][j].grupo,Prof:this.maestros[i][0],Hor:this.maestros[i][1][j].horario.lunes,Lug:this.maestros[i][1][j].cupo});
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
    $(".submenu").click(function() {
      $(this).children("ul").slideToggle();

    }
    )

    $("ul").click(function(p) {
      p.stopPropagation();
    })

    if ($(window).width() > 720) {


      $(".submenu").children("ul").show();



    }
    else {

    }


}
}
