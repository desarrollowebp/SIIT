import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-preficha-pago',
  templateUrl: './preficha-pago.component.html',
  styleUrls: ['./preficha-pago.component.css']
})
export class PrefichaPagoComponent implements OnInit {


  

  constructor() { }

  

  ngOnInit() {
  	$('h1').click(function() {
      $(this).fadeOut()
    })

  }
    importe=[{ dato:'importe a pagar:' , importe:'2450.00'} ]
    semes=[{dato:'semestre:',semest:'9'} ]
    numero=[{dato:'Numero de Control:',numerocontrol:'14040437'}]
    alumno=[{dato:'Alumno:', nombre:'Abrego Salmeron Ricardo'}]
    carrera=[{dato:'Carrera:', carre:'Ingeneria En Sistemas Computacionales'}]
    consep=[{dato:'Consepto:', reinc:'INSCRIPCION REINGRESO'}]
    fecha=[{dato:'Periodo',dia:'AGOSTO-DICIEMBRE/2018',}]
}
