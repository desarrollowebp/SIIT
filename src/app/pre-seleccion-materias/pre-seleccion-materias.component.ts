import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-pre-seleccion-materias',
  templateUrl: './pre-seleccion-materias.component.html',
  styleUrls: ['./pre-seleccion-materias.component.css']
})
export class PreSeleccionMateriasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    var f=new Date();
    document.querySelector('#hora').innerHTML=(diasSemana[f.getDay()]+ ", " + f.getDate() +
     " de " + meses[f.getMonth()] + " de " + f.getFullYear() + " a las " + f.getHours() + ":" 
     + f.getMinutes() + ":" + f.getSeconds());
  }

}
