import { Component, OnInit } from '@angular/core';
import *as $ from 'jquery';
@Component({
  selector: 'app-datos-escolares',
  templateUrl: './datos-escolares.component.html',
  styleUrls: ['./datos-escolares.component.css']
})
export class DatosEscolaresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".submenu").click(function()

{
$(this).children("ul").slideToggle();

}
)

$("ul").click(function(p){
  p.stopPropagation();
})
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
