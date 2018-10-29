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

  Carga = [
    { dato: 'carga', carga: '1' }
  ]
  periodoEsc = [
    { dato: 'Perido Escolar', periodoEsc: 'AGOS/DIC 2014',  }
  ]
  promedioSem = [
    { dato: 'Promedio Semestral', promedioSem: '80.70', promedioSem2:'89.90' }
  ]
  creditosAprob = [
    { dato: 'Creditos Aprobados', creditosAprob:'26' }
  ]
  promedioAritmetico = [
    { dato: 'promedio Aritmetico', promedioAritmetico:'68.90', promedioAritmetico2:'69.10' }
  ]
  creditosCursados = [
    { dato: 'Creditos Cursados', creditosCursados:'26' }
  ]
  creditosAprobados = [
    { dato: 'Creditos Aprobados', creditosAprobados:'22' , creditosAprobados2:'26' }
  ]
}
