import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {PrefichaPagoService} from './preficha-pago.service';

@Component({
  selector: 'app-preficha-pago',
  templateUrl: './preficha-pago.component.html',
  styleUrls: ['./preficha-pago.component.css']
})
export class PrefichaPagoComponent implements OnInit {
  datospreficha;
  constructor(public service: PrefichaPagoService) { 
    //service.getPrefichaPago().subscribe((data)=>{
     // this.datospreficha=data;
      //this.datospreficha=this.datospreficha.preficha;
      //console.log(this.datospreficha);
    //});
    this.service.getPrefichaPago().subscribe(data => { console.log(data) });

  }

  ngOnInit() {
    
    this.service.getPrefichaPago();
  }

}