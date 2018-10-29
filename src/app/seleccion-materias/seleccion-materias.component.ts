import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-seleccion-materias',
  templateUrl: './seleccion-materias.component.html',
  styleUrls: ['./seleccion-materias.component.css']
})
export class SeleccionMateriasComponent implements OnInit {

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
