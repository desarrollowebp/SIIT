import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {prefichaPagoService} from './preficha-pago.service';

@Component({
  selector: 'app-preficha-pago',
  templateUrl: './preficha-pago.component.html',
  styleUrls: ['./preficha-pago.component.css']
})
export class PrefichaPagoComponent implements OnInit {

  datospreficha;
  

  constructor(public service:prefichaPagoService) { 
    service.getprefichaPago().subscribe((data)=>{
      this.datospreficha=data;
      this.datospreficha=this.datospreficha.preficha;
      console.log(this.datospreficha);
    });

  }

  

  ngOnInit() {
    
      this.service.getprefichaPago();
  }
/* 
  db.datosreins.insert({     
 
 
 nombres: 'juan',
  apellidos: 'cabral',
  numeroControl: '14040428',
  semestre: '3',
  periodo: 'enero-febrero',
  importe: '1550',
  carrera: 'sistemas',
  consepto: 'pago de incripcion',
  fechavencimiento: 'diciembre',
  sucursalCuenta: '70000',
  referenciaAlfanumerica: 'P14040428'

})
*/
}