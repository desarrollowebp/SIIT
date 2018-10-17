import { Component, OnInit } from '@angular/core';
import *as $ from 'jquery'

@Component({
  selector: 'app-verificacion-beca',
  templateUrl: './verificacion-beca.component.html',
  styleUrls: ['./verificacion-beca.component.css']
})
export class VerificacionBecaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(menu);
 
var contador = 1;
 
function menu () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
 
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});

	$('ol').click(function(p){
		p.stopPropagation();
	})
}
  }

}
