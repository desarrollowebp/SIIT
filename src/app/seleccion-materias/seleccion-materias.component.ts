import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { RouterModule } from '@angular/router';
import { SeleccionMateriassDataService } from './seleeccion-materias.service'
@Component({
  selector: 'app-seleccion-materias',
  templateUrl: './seleccion-materias.component.html',
  styleUrls: ['./seleccion-materias.component.css']
})
export class SeleccionMateriasComponent implements OnInit {



  recuperarSemestre = function() {
  }


cargaSemestreActual=[
{
numeroCreditos:'x',
uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0,
tipoEvaluacion:"Ordinario",codigo:"X",
nombreMateria:"algrebra",nombreMaestro:"Juan",grupo:"X",cupo:30,
horario:{lunes:{salon:["sc5"],hora:["20:30"]},martes:{salon:["sc5"],hora:["20:30"]},miercoles:{salon:["sc5"],hora:["20:30"]},jueves:{salon:["sc5"],hora:["20:30"]},viernes:{salon:["sc5"],hora:["20:30"]},sabado:{salon:["sc5"],hora:["20:30"]}}
}
];

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
materiaActual;
gpsDisponibles={};
materiasSeleccionadas=[];
materiaModal="";
ejemploMaterias={
materiasSem:[{
carrera:"Sistemas",
semestres:[
]
}]
};
validacion ={};
  modals = "modal";
  constructor(service : SeleccionMateriassDataService) {
    service.getMaterias().subscribe((data:any)=>{

    this.ejemploMaterias=data;

    });

    this.modals = "modal";
  }
  apilarSeleccion($gpsdisp,$gpsdispaux){

   if(this.materiasSeleccionadas.length  > 0  ){
    var salida = true;
   for (let i = 0; i < this.materiasSeleccionadas.length ; i++) {

     if(this.materiasSeleccionadas[i].maestro.horario.lunes.hora.toString() == $gpsdisp.horario.lunes.hora.toString() ){
       alert("La hora es igual a: "+$gpsdispaux.nombre);
       i=this.materiasSeleccionadas.length+100;
       salida = false;
     }
   }
   if(salida){
    this.materiasSeleccionadas
    let temporal={grupo:$gpsdispaux,maestro:$gpsdisp};
    this.materiasSeleccionadas.push(temporal);
    }
    this.cerrar();

   }

   else{
     let temporal={grupo:$gpsdispaux,maestro:$gpsdisp};
     this.materiasSeleccionadas.push(temporal);
     this.cerrar();
   }

  }
  funcMostrarGrupos($materia) {
    console.log($materia);
    this.gpsDisponibles= $materia;
    this.materiaActual=$materia.nombre;
    this.modals = "visibleNo";
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
