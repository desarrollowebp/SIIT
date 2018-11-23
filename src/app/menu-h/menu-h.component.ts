import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
	selector: 'app-menu-h',
	templateUrl: './menu-h.component.html',
	styleUrls: ['./menu-h.component.css']
})
export class MenuHComponent implements OnInit {

	constructor(private router: Router) { }


	ngOnInit() {
		$(document).ready(menuh);

		var contador = 1;

		function menuh() {
			$('.menu_bar').click(function () {
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
			$('.submenu2').click(function () {
				$(this).children('.children').slideToggle();
			});

			$('#mantener').click(function (p) {
				p.stopPropagation();
			})
			$('.children').click(function (p) {
				p.stopPropagation();
				$('nav').animate({
					left: '-100%'
				});
			})

		}
	}

}
