import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-kardex-calificaciones',
  templateUrl: './kardex-calificaciones.component.html',
  styleUrls: ['./kardex-calificaciones.component.css']
})
export class KardexCalificacionesComponent implements OnInit {

  constructor() { 
   
  }

  ngOnInit() {
    var ShowCells = function() {
      var tbody = $('tbody');
      var row = $('tbody > tr');
      row.addClass('closed');
      row.click(function(){
        if((!$(this).hasClass('closed'))&&($(this).parent().is("tbody"))) {
          $(this).attr('class','closed');
        }
        else {
          row.addClass('closed');
          $(this).removeClass('closed');
          }
      });
    }
  
    $(document).ready(function(){
      ShowCells();
    });
  }

}
