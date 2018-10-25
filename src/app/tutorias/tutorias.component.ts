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

}
	