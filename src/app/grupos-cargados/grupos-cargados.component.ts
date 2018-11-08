import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-grupos-cargados',
  templateUrl: './grupos-cargados.component.html',
  styleUrls: ['./grupos-cargados.component.css']
})
export class GruposCargadosComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  	(function(){
    'use strict';
	
	$.fn.extend({
		filterTable: function(){
			return this.each(function(){
				$(this).on('keyup', function(e){
					$('.filterTable_no_results').remove();
					var $this = $(this), 
                        search = $this.val().toLowerCase(), 
                        target = $this.attr('data-filters'), 
                        $target = $(target), 
                        $rows = $target.find('tbody tr');
                        
					if(search == '') {
						$rows.show(); 
					} else {
						$rows.each(function(){
							var $this = $(this);
							$this.text().toLowerCase().indexOf(search) === -1 ? $this.hide() : $this.show();
						})
						if($target.find('tbody tr:visible').size() === 0) {
							var col_count = $target.find('tr').first().find('td').size();
							var no_results = $('<tr class="filterTable_no_results"><td colspan="'+col_count+'">No results found</td></tr>')
							$target.find('tbody').append(no_results);
						}
					}
				});
			});
		}
	});
	$('[data-action="filter"]').filterTable();
})();

  $(function(){
    // attach table filter plugin to inputs
	$('[data-action="filter"]').filterTable();
	
	$('.container').on('click', '.panel-heading span.filter', function(e){
		var $this = $(this), 
			$panel = $this.parents('.panel');
		
		$panel.find('.panel-body').slideToggle();
		if($this.css('display') != 'none') {
			$panel.find('.panel-body input').focus();
		}
	});
	$('[data-toggle="tooltip"]').tooltip();
})


  	    $('.pestanasGC').click(function(evento){
    	if($(this).data("sem")==0)
    	{
    		$('.semestresdivGC').show();
    	}else{if($(this).data("sem")==1)
	    	  {
	    	  	$('.semestresdivGC').hide();
	    		$('#semestre1GC').show(); 
	    	  }else{if($(this).data("sem")==2)
				     {
				     	$('.semestresdivGC').hide();
				    	$('#semestre2GC').show();
				     }else{if($(this).data("sem")==3)
					    	  {
					    	  	$('.semestresdivGC').hide();
					    		$('#semestre3GC').show();
					    	  }else{if($(this).data("sem")==4)
							    	  {
							    	  	$('.semestresdivGC').hide();
							    		$('#semestre4GC').show();
							    	  }else{if($(this).data("sem")==5)
								    	    {
								    	    	$('.semestresdivGC').hide();
								    			$('#semestre5GC').show();
								    	    }else{if($(this).data("sem")==6)
										    	  {
										    	  	$('.semestresdivGC').hide();
										    		$('#semestre6GC').show();
										    	  }else{if($(this).data("sem")==7)
												    	  {
												    	  	$('.semestresdivGC').hide();
												    		$('#semestre7GC').show();
												    	  }else{if($(this).data("sem")==8)
														    	  {
														    	  	$('.semestresdivGC').hide();
														    		$('#semestre8GC').show();
														    	  }else{if($(this).data("sem")==9)
																    	  {
																    	  	$('.semestresdivGC').hide();
																    		$('#semestre9GC').show();
																    	  }else{
																    				$('.semestresdivGC').hide();
																    		   }  
														    		   }
												    		   }
							    		   			   }
								    		   }
							    		   }
			    				   }
						  }
				    }
	    	 }
  })
 
}

  titulo = [
    { tdato: 'Gpo-Sem', tmateria: 'Materia', tlunes: 'Lunes', tmartes: 'Martes', tmiercoles: 'Miercoles', tjueves: 'Jueves', tviernes: 'Viernes', tsabado:'Sabado' }
  ]
  sem1 = [
    { dato: '1M', materia: 'CALCULO DIFERENCIAL\n', codigo: 'CO1001\n', facilitador: 'VILLARREAL REYES ELIZABETH SORAYA', lunes: '17:00 - 18:00\nEE10', martes: '17:00 - 18:00\nEE10', miercoles: '17:00 - 18:00\nEE10', jueves: '17:00 - 18:00\nEE10', viernes: '17:00 - 18:00\nEE10', sabado:'' },
	{ dato: '1Z', materia: 'FUNDAMENTOS DE PROGRAMACION\n', codigo: 'SI1800\n', facilitador: 'CALZADA TERRONES JEORGINA', lunes: '07:00 - 08:00\nLC23', martes: '07:00 - 08:00\nLC23', miercoles: '07:00 - 08:00\nLC23', jueves: '07:00 - 08:00\nLC23', viernes: '07:00 - 08:00\nLC23', sabado:'' },
	{ dato: '1Y', materia: 'CALCULO DIFERENCIAL\n', codigo: 'CO1001\n', facilitador: 'FAVILA HERRERA LEONEL HUGO', lunes: '11:00 - 12:00\nSC6', martes: '11:00 - 12:00\nSC6', miercoles: '11:00 - 12:00\nSC6', jueves: '11:00 - 12:00\nSC6', viernes: '11:00 - 12:00\nSC6', sabado:'' },
	{ dato: '1A', materia: 'TALLER DE ETICA\n', codigo: 'CO1006\n', facilitador: 'REYES OJEDA TOMAS', lunes: '09:00 - 10:00\nSC6', martes: '09:00 - 10:00\nSC6', miercoles: '09:00 - 10:00\nSC6', jueves: '09:00 - 10:00\nSC6', viernes: '09:00 - 10:00\nSC6', sabado:'' },
	{ dato: '1B', materia: 'MATEMATICAS DISCRETAS\n', codigo: 'SI1801\n', facilitador: 'RIVERA SAUCEDO ELDA', lunes: '10:00 - 11:00\nSC6', martes: '10:00 - 11:00\nSC6', miercoles: '10:00 - 11:00\nSC6', jueves: '10:00 - 11:00\nSC6', viernes: '10:00 - 11:00\nSC6', sabado:'' }
  ]

  sem2 = [
    { dato: '2M', materia: 'CALCULO INTEGRAL\n', codigo: 'ACF0902\n', facilitador: 'REYES MARTINEZ LUIS GUSTAVO', lunes: '07:00 - 08:00\nQB6', martes: '07:00 - 08:00\nQB6', miercoles: '07:00 - 08:00\nQB6', jueves: '07:00 - 08:00\nQB6', viernes: '07:00 - 08:00\nQB6', sabado:'' },
	{ dato: '2Z', materia: 'ALGEBRA LINEAL\n', codigo: 'CO1003\n', facilitador: 'VARELA RAMIREZ CESAR PORFIRIO', lunes: '16:00 - 17:00\nEE3', martes: '16:00 - 17:00\nEE3', miercoles: '16:00 - 17:00\nEE3', jueves: '16:00 - 17:00\nEE3', viernes: '16:00 - 17:00\nEE3', sabado:'' },
	{ dato: '2Y', materia: 'PROGRAMACION ORIENTADA A OBJETOS\n', codigo: 'AED1286\n', facilitador: 'RUIZ CARRETE J GUADALUPE', lunes: '08:00 - 09:00\nLC4', martes: '08:00 - 09:00\nLC4', miercoles: '08:00 - 09:00\nLC4', jueves: '08:00 - 09:00\nLC4', viernes: '08:00 - 09:00\nLC4', sabado:'' },
	{ dato: '2A', materia: 'QUIMICA\n', codigo: 'AEC1058\n', facilitador: 'HERNANDEZ VELAZQUEZ RAFAEL', lunes: '10:00 - 11:00\nSC7', martes: '10:00 - 11:00\nSC7', miercoles: '10:00 - 11:00\nSC7', jueves: '10:00 - 11:00\nSC7', viernes: '', sabado:'' }
  ]

  sem3 = [
    { dato: '3M', materia: 'INVESTIGACION DE OPERACIONES\n', codigo: 'SCC1013\n', facilitador: 'BUTZMANN ALVAREZ LAURA GUADALUPE', lunes: '07:00 - 08:00\nSC8', martes: '07:00 - 08:00\nSC8', miercoles: '07:00 - 08:00\nSC8', jueves: '07:00 - 08:00\nSC8', viernes: '', sabado:'' },
	{ dato: '3Z', materia: 'DESARROLLO SUSTENTABLE\n', codigo: 'IT8833\n', facilitador: 'LUGO MORALES GABRIEL ARTURO', lunes: '11:00 - 12:00\nSC8', martes: '11:00 - 12:00\nSC8', miercoles: '11:00 - 12:00\nSC8', jueves: '11:00 - 12:00\nSC8', viernes: '11:00 - 12:00\nSC8', sabado:'' },
	{ dato: '3B', materia: 'CULTURA EMPRESARIAL\n', codigo: 'SI1808\n', facilitador: 'AVITIA ROCHA BRENDA DE LA LUZ', lunes: '12:00 - 13:00\nSC8', martes: '12:00 - 13:00\nSC8', miercoles: '12:00 - 13:00\nSC8', jueves: '12:00 - 13:00\nSC8', viernes: '', sabado:'' }
  ]

  sem4 = [
    { dato: '4M', materia: 'MÉTODOS NUMÉRICOS\n', codigo: 'SI1813\n', facilitador: 'HERRERA ZARATE JOSE GABRIEL', lunes: '07:00 - 08:00\nLC4', martes: '07:00 - 08:00\nLC4', miercoles: '07:00 - 08:00\nLC4', jueves: '07:00 - 08:00\nLC4', viernes: '', sabado:'' },
	{ dato: '4Z', materia: 'SIMULACION\n', codigo: 'SCD1022\n', facilitador: 'CUSSIN DELGADO MARIO AURELIO', lunes: '09:00 - 10:00\nSC9', martes: '09:00 - 10:00\nSC9', miercoles: '09:00 - 10:00\nSC9', jueves: '09:00 - 10:00\nSC9', viernes: '09:00 - 10:00\nSC9', sabado:'' }
  ]

  sem5 = [
    { dato: '5M', materia: 'ARQ. DE COMPUTADORAS\n', codigo: 'SI1823\n', facilitador: 'RAMOS DOMINGUEZ JACOBO ADRIAN', lunes: '07:00 - 08:00\nSC10', martes: '07:00 - 08:00\nSC10', miercoles: '07:00 - 08:00\nSC10\n15:00 - 17:00\nLED', jueves: '', viernes: '', sabado:'' },
	{ dato: '5Z', materia: 'FUNDAMENTOS DE ING. DE SW\n', codigo: 'SI1822\n', facilitador: 'FLORES NUÑEZ VERONICA', lunes: '11:00 - 12:00\nSC10', martes: '11:00 - 12:00\nSC10', miercoles: '11:00 - 12:00\nSC10', jueves: '11:00 - 12:00\nSC10', viernes: '11:00 - 12:00\nSC10', sabado:'' },
	{ dato: '5Y', materia: 'TALLER DE BASE DE DATOS\n', codigo: 'SI1820\n', facilitador: 'HERNANDEZ CARRILLO IRMA SELENE', lunes: '17:00 - 18:00\nLC4', martes: '17:00 - 18:00\nLC4', miercoles: '17:00 - 18:00\nLC4', jueves: '17:00 - 18:00\nLC4', viernes: '', sabado:'' }
	
  ]

  sem6 = [
    { dato: '6Z', materia: 'ADMINISTRACION DE BASES DE DATOS\n', codigo: 'SI1826\n', facilitador: 'QUIÑONES GARCIA CARLOS', lunes: '07:00 - 08:00\nLC22', martes: '07:00 - 08:00\nLC22', miercoles: '07:00 - 08:00\nLC22', jueves: '07:00 - 08:00\nLC22', viernes: '07:00 - 08:00\nLC22', sabado:'' },
	{ dato: '6Y', materia: 'INGENIERIA DE SOFTWARE\n', codigo: 'SI1828\n', facilitador: 'DOMINGUEZ FLORES ARACELI SOLEDAD', lunes: '08:00 - 09:00\nSC11', martes: '08:00 - 09:00\nSC11', miercoles: '08:00 - 09:00\nSC11', jueves: '08:00 - 09:00\nSC11', viernes: '08:00 - 09:00\nSC11', sabado:'' },
	{ dato: '6A', materia: 'GRAFICACION\n', codigo: 'SI1827\n', facilitador: 'MARTINEZ SAAVEDRA RAFAEL', lunes: '14:00 - 15:00\nSC11', martes: '14:00 - 15:00\nSC11', miercoles: '14:00 - 15:00\nSC11', jueves: '14:00 - 15:00\nSC11', viernes: '14:00 - 15:00\nSC11', sabado:'' },
	{ dato: '6B', materia: 'LENGUAJES DE INTERFAZ\n', codigo: 'SCC1014\n', facilitador: 'SOLIS GALLEGOS JOSE LAURO', lunes: '16:00 - 17:00\nSC11', martes: '16:00 - 17:00\nSC11', miercoles: '16:00 - 17:00\nSC11', jueves: '16:00 - 17:00\nSC11', viernes: '', sabado:'' }
  ]

  sem7 = [
    { dato: '7M', materia: 'CONM. Y ENRUT. DE REDES DE DAT\n', codigo: 'SI1831\n', facilitador: 'RODRIGUEZ ZUÑIGA MARCO ANTONIO', lunes: '09:00 - 10:00\nSC15', martes: '09:00 - 10:00\nSC15', miercoles: '09:00 - 10:00\nSC15', jueves: '09:00 - 10:00\nSC15', viernes: '09:00 - 10:00\nSC15', sabado:'' },
	{ dato: '7A', materia: 'TALLER DE INVESTIGACION I\n', codigo: 'SI1832\n', facilitador: 'ZAMORA LERMA MARIA DEL RAYO', lunes: '08:00 - 09:00\nSC8', martes: '08:00 - 09:00\nSC8', miercoles: '08:00 - 09:00\nSC8', jueves: '08:00 - 09:00\nSC8', viernes: '', sabado:'' },
	{ dato: '7B', materia: 'SISTEMAS PROGRAMABLES\n', codigo: 'SI1834\n', facilitador: 'VALDEZ GUTIERREZ JOSE RAMON', lunes: '19:00 - 20:00\nSC15', martes: '19:00 - 20:00\nSC15', miercoles: '19:00 - 20:00\nSC15', jueves: '19:00 - 20:00\nSC15', viernes: '', sabado:'' }
  ]

  sem8 = [
    { dato: '8M', materia: 'ADMINISTRACION DE REDES\n', codigo: 'SI1836\n', facilitador: 'VALDEZ HERNANDEZ SERGIO', lunes: '08:00 - 09:00\nSC16', martes: '08:00 - 09:00\nSC16', miercoles: '08:00 - 09:00\nSC16', jueves: '08:00 - 09:00\nSC16', viernes: '', sabado:'' },
	{ dato: '8Z', materia: 'PROGRAMACION LOGICA Y FUNCIONA\n', codigo: 'SI1835\n', facilitador: 'NUÑEZ ROCHA HECTOR FRANCISCO', lunes: '10:00 - 11:00\nLC3', martes: '10:00 - 11:00\nLC3', miercoles: '10:00 - 11:00\nLC3', jueves: '10:00 - 11:00\nLC3', viernes: '', sabado:'' },
	{ dato: '8A', materia: 'PROGRAMACION WEB\n', codigo: 'SI1838\n', facilitador: 'RODRIGUEZ RIVAS JOSE GABRIEL', lunes: '11:00 - 12:00\nLC23', martes: '11:00 - 12:00\nLC23', miercoles: '11:00 - 12:00\nLC23', jueves: '11:00 - 12:00\nLC23', viernes: '11:00 - 12:00\nLC23', sabado:'' },
	{ dato: '8B', materia: 'TALLER DE INVESTIGACION II\n', codigo: 'SI1837\n', facilitador: 'MARTINEZ SAAVEDRA RAFAEL', lunes: '08:00 - 09:00\nSC13', martes: '08:00 - 09:00\nSC13', miercoles: '08:00 - 09:00\nSC13', jueves: '08:00 - 09:00\nSC13', viernes: '', sabado:'' }
  ]

  sem9 = [
    { dato: '9M', materia: 'INTELIGENCIA ARTIFICIAL\n', codigo: 'SI1839\n', facilitador: 'TORRES IBARRA IVONNE', lunes: '19:00 - 20:00\nSC11', martes: '19:00 - 20:00\nSC11', miercoles: '19:00 - 20:00\nSC11', jueves: '19:00 - 20:00\nSC11', viernes: '', sabado:'' }
  ]
 
}