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

}
