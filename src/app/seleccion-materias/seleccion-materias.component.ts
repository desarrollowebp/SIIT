import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-seleccion-materias',
  templateUrl: './seleccion-materias.component.html',
  styleUrls: ['./seleccion-materias.component.css']
})
export class SeleccionMateriasComponent implements OnInit {



  semestres= [  ];

  totalCreditos;

  recuperarSemestre = function() {
    var i;

    for (i = 0; i < 9; i++) {
      //Recuperar Semestres
      var j;
      var materias=[];
      for(j = 0; j < 5; j++){
        //Recuperar materias por semestre
        var cadenaCon=[ {codigo:'xyz'} ];
        var unidadesCalif={ uno:0, dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,diez:0};
        var codColor={cod1:'codcolor1', cod2:'codcolor2',
                  cod3:'codcolor3',cod4:'codcolor4',
                  cod5:'codcolor5',cod6:'codcolor6',
                  cod7:'codcolor7',cod8:'codcolor8',
                  cod9:'codcolor9',cod10:'codcolor9'};
        var materia={codigo:"XXX", nombre:"Ejemplo"+i+"-"+j,numeroCreditos:'x', unidadesCalif, tipoEvaluacion:"Ordinario", codColor ,cadenaCon};
        materias.push(materia);

      }
      // asignar materias semestre
      var semestre = { numsem:i, materias };
      this.semestres.push(semestre);
  
    }

  }





semestre1= [{Nombre:"Calculo",totCr:"10"},
              {Nombre:"Programación orientada a obetos",totCr:"15"},
              {Nombre:"Administracion",totCr:"20"},
              {Nombre:"Química",totCr:"5"},
              {Nombre:"Taller Inv. I",totCr:"3"}
            ];
gpsDisponibles = [{Gpo:"2z",Prof:"Gustavo Reyes",Hor:"10:00-12:00",Lug:"5"},
                  {Gpo:"2zx",Prof:"Laurito Mendoza",Hor:"7:00-8:00",Lug:"15"},
                  {Gpo:"2zy",Prof:"Laura Perez",Hor:"17:00-16:00",Lug:"30"}];
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
   this.materiaModal=$materia.Nombre;

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
    else {

    }


}
}
