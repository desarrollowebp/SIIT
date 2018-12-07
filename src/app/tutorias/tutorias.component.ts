import { Component, AfterViewInit } from '@angular/core';
 

import * as $ from 'jquery';
import 'jquery-ui';
import { TutoriasService } from './tutorias.service';

@Component({
  selector: 'app-tutorias',
  templateUrl: './tutorias.component.html',
  styleUrls: ['./tutorias.component.css']
})
export class TutoriasComponent implements AfterViewInit {
 tutorias = [
    { dato: 'Tutor', nombre: 'Alexander Anderson Huerta', act1: 'Actividad 1',checkbox1:true, 
    act2: 'Actividad 2',checkbox2:true,act3: 'Actividad 3',checkbox3:true, act4: 'Actividad 4',checkbox4:true,
    act5: 'Actividad 5',checkbox5:true, act6: 'Actividad 6',checkbox6:true, act7: 'Actividad 7',checkbox7:true, 
    act8: 'Actividad 8',checkbox8:true, act9: 'Actividad 9',checkbox9:true, act10: 'Actividad 10',checkbox10:true,
    act11: 'Actividad 11',checkbox11:true,act12: 'Actividad 12',checkbox12:true, act13: 'Actividad 13',checkbox13:true,
    act14: 'Actividad 14',checkbox14:true, act15: 'Actividad 15',checkbox15:true, act16: 'Actividad 16',checkbox16:true,
    act17: 'Actividad 17',checkbox17:true, act18: 'Actividad 18',checkbox18:true, act19: 'Actividad 19',checkbox19:true,
    act20: 'Actividad 20',checkbox20:true, avance: 'Avance de actividades' } 
  ]
  constructor(private servicio : TutoriasService) {
    
  }


  ngAfterViewInit() {
    this.servicio.getTutorTutoria().subscribe(function(data){
      this.tutorias = data;
    });


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

 
  

}
	