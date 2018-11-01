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

  tutorias = [
    { dato: 'Tutor', nombre: 'Alexander Anderson Huerta', act1: 'Actividad 1', act2: 'Actividad 2',
    act3: 'Actividad 3', act4: 'Actividad 4', act5: 'Actividad 5', act6: 'Actividad 6', act7: 'Actividad 7', act8: 'Actividad 8', act9: 'Actividad 9', act10: 'Actividad 10', act11: 'Actividad 11', act12: 'Actividad 12', act13: 'Actividad 13', act14: 'Actividad 14', act15: 'Actividad 15', act16: 'Actividad 16', act17: 'Actividad 17', act18: 'Actividad 18', act19: 'Actividad 19', act20: 'Actividad 20' }
  ]

  

  
  avance = [
    { dato: 'Avance de actividades' }
  ]

}
	