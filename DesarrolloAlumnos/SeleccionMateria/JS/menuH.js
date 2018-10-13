$(document).ready(menuh);

var contador = 1;

function menuh () {
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
	$('.submenu2').click(function(){
		$(this).children('.children').slideToggle();
	});

	$('ol').click(function(p){
		p.stopPropagation();
	})
}
