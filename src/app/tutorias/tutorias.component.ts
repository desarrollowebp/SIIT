import { Component, AfterViewInit } from '@angular/core';

import * as $ from 'jquery';
import 'jquery-ui';

@Component({
  selector: 'app-tutorias',
  templateUrl: './tutorias.component.html',
  styleUrls: ['./tutorias.component.css']
})
export class TutoriasComponent implements AfterViewInit {

  constructor() {}


  ngAfterViewInit() {

  	$(document).ready(function() {
  
  // get box count
  var count = 0;
  var count2 = 0;
  var percentage = 0;
  function countBoxes() { 
    count = $("input[type='checkbox']").length;
    count2 = $("input:checked").length;
    console.log(count);
    $("#progreso").css("width", (100*(count2/count))+"%");
    $("#lblporcentaje").text((100*(count2/count))+"%")
  }
  
  countBoxes();
  $(":checkbox").click(countBoxes);
  
});

  }

  tutor = [
    { dato: 'Tutor', nombre: 'Alexander Anderson Huerta' }
  ]

  actividad1 = [
    { dato: 'Actividad 1' }
  ]

  actividad2 = [
    { dato: 'Actividad 2' }
  ]

  actividad3 = [
    { dato: 'Actividad 3' }
  ]

  actividad4 = [
    { dato: 'Actividad 4' }
  ]

  actividad5 = [
    { dato: 'Actividad 5' }
  ]

  actividad6 = [
    { dato: 'Actividad 6' }
  ]

  actividad7 = [
    { dato: 'Actividad 7' }
  ]

  actividad8 = [
    { dato: 'Actividad 8' }
  ]

  actividad9 = [
    { dato: 'Actividad 9' }
  ]

  actividad10 = [
    { dato: 'Actividad 10' }
  ]

  actividad11 = [
    { dato: 'Actividad 11' }
  ]

  actividad12 = [
    { dato: 'Actividad 12' }
  ]

  actividad13 = [
    { dato: 'Actividad 13' }
  ]

  actividad14 = [
    { dato: 'Actividad 14' }
  ]

  actividad15 = [
    { dato: 'Actividad 15' }
  ]

  actividad16 = [
    { dato: 'Actividad 16' }
  ]

  actividad17 = [
    { dato: 'Actividad 17' }
  ]

  actividad18 = [
    { dato: 'Actividad 18' }
  ]

  actividad19 = [
    { dato: 'Actividad 19' }
  ]

  actividad20 = [
    { dato: 'Actividad 20' }
  ]

  avance = [
    { dato: 'Avance de actividades' }
  ]

}
	