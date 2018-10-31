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


  	    $('.pestanas').click(function(evento){
    	if($(this).data("sem")==0)
    	{
    		$('.semestresdiv').show();
    	}else{if($(this).data("sem")==1)
	    	  {
	    	  	$('.semestresdiv').hide();
	    		$('#semestre1').show(); 
	    	  }else{if($(this).data("sem")==2)
				     {
				     	$('.semestresdiv').hide();
				    	$('#semestre2').show();
				     }else{if($(this).data("sem")==3)
					    	  {
					    	  	$('.semestresdiv').hide();
					    		$('#semestre3').show();
					    	  }else{if($(this).data("sem")==4)
							    	  {
							    	  	$('.semestresdiv').hide();
							    		$('#semestre4').show();
							    	  }else{if($(this).data("sem")==5)
								    	    {
								    	    	$('.semestresdiv').hide();
								    			$('#semestre5').show();
								    	    }else{if($(this).data("sem")==6)
										    	  {
										    	  	$('.semestresdiv').hide();
										    		$('#semestre6').show();
										    	  }else{if($(this).data("sem")==7)
												    	  {
												    	  	$('.semestresdiv').hide();
												    		$('#semestre7').show();
												    	  }else{if($(this).data("sem")==8)
														    	  {
														    	  	$('.semestresdiv').hide();
														    		$('#semestre8').show();
														    	  }else{if($(this).data("sem")==9)
																    	  {
																    	  	$('.semestresdiv').hide();
																    		$('#semestre9').show();
																    	  }else{
																    				$('.semestresdiv').hide();
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
    { dato: '1M', materia: 'CALCULO DIFERENCIAL\nCO1001\nVILLARREAL REYES ELIZABETH SORAYA', lunes: '17:00 - 18:00\nEE10', martes: '17:00 - 18:00\nEE10', miercoles: '17:00 - 18:00\nEE10', jueves: '17:00 - 18:00\nEE10', viernes: '17:00 - 18:00\nEE10', sabado:'' },
	{ dato: '1Z', materia: 'FUNDAMENTOS DE PROGRAMACION\nSI1800\nCALZADA TERRONES JEORGINA', lunes: '07:00 - 08:00\nLC23', martes: '07:00 - 08:00\nLC23', miercoles: '07:00 - 08:00\nLC23', jueves: '07:00 - 08:00\nLC23', viernes: '07:00 - 08:00\nLC23', sabado:'' },
	{ dato: '1Y', materia: 'CALCULO DIFERENCIAL\nCO1001\nFAVILA HERRERA LEONEL HUGO', lunes: '11:00 - 12:00\nSC6', martes: '11:00 - 12:00\nSC6', miercoles: '11:00 - 12:00\nSC6', jueves: '11:00 - 12:00\nSC6', viernes: '11:00 - 12:00\nSC6', sabado:'' },
	{ dato: '1A', materia: 'TALLER DE ETICA\nCO1006\nREYES OJEDA TOMAS', lunes: '09:00 - 10:00\nSC6', martes: '09:00 - 10:00\nSC6', miercoles: '09:00 - 10:00\nSC6', jueves: '09:00 - 10:00\nSC6', viernes: '09:00 - 10:00\nSC6', sabado:'' },
	{ dato: '1B', materia: 'MATEMATICAS DISCRETAS\nSI1801\nRIVERA SAUCEDO ELDA', lunes: '10:00 - 11:00\nSC6', martes: '10:00 - 11:00\nSC6', miercoles: '10:00 - 11:00\nSC6', jueves: '10:00 - 11:00\nSC6', viernes: '10:00 - 11:00\nSC6', sabado:'' }
  ]

  sem2 = [
    { dato: '2M', materia: 'CALCULO INTEGRAL\nACF0902\nREYES MARTINEZ LUIS GUSTAVO', lunes: '07:00 - 08:00\nQB6', martes: '07:00 - 08:00\nQB6', miercoles: '07:00 - 08:00\nQB6', jueves: '07:00 - 08:00\nQB6', viernes: '07:00 - 08:00\nQB6', sabado:'' },
	{ dato: '2Z', materia: 'ALGEBRA LINEAL\nCO1003\nVARELA RAMIREZ CESAR PORFIRIO', lunes: '16:00 - 17:00\nEE3', martes: '16:00 - 17:00\nEE3', miercoles: '16:00 - 17:00\nEE3', jueves: '16:00 - 17:00\nEE3', viernes: '16:00 - 17:00\nEE3', sabado:'' },
	{ dato: '2Y', materia: 'PROGRAMACION ORIENTADA A OBJETOS\nAED1286\nRUIZ CARRETE J GUADALUPE', lunes: '08:00 - 09:00\nLC4', martes: '08:00 - 09:00\nLC4', miercoles: '08:00 - 09:00\nLC4', jueves: '08:00 - 09:00\nLC4', viernes: '08:00 - 09:00\nLC4', sabado:'' },
	{ dato: '2A', materia: 'QUIMICA\nAEC1058\nHERNANDEZ VELAZQUEZ RAFAEL', lunes: '10:00 - 11:00\nSC7', martes: '10:00 - 11:00\nSC7', miercoles: '10:00 - 11:00\nSC7', jueves: '10:00 - 11:00\nSC7', viernes: '', sabado:'' }
  ]

  sem3 = [
    { dato: '3M', materia: 'INVESTIGACION DE OPERACIONES\nSCC1013\nBUTZMANN ALVAREZ LAURA GUADALUPE', lunes: '07:00 - 08:00\nSC8', martes: '07:00 - 08:00\nSC8', miercoles: '07:00 - 08:00\nSC8', jueves: '07:00 - 08:00\nSC8', viernes: '', sabado:'' },
	{ dato: '3Z', materia: 'DESARROLLO SUSTENTABLE\nIT8833\nLUGO MORALES GABRIEL ARTURO', lunes: '11:00 - 12:00\nSC8', martes: '11:00 - 12:00\nSC8', miercoles: '11:00 - 12:00\nSC8', jueves: '11:00 - 12:00\nSC8', viernes: '11:00 - 12:00\nSC8', sabado:'' },
	{ dato: '3B', materia: 'CULTURA EMPRESARIAL\nSI1808\nAVITIA ROCHA BRENDA DE LA LUZ', lunes: '12:00 - 13:00\nSC8', martes: '12:00 - 13:00\nSC8', miercoles: '12:00 - 13:00\nSC8', jueves: '12:00 - 13:00\nSC8', viernes: '', sabado:'' }
  ]

  sem4 = [
    { dato: '4M', materia: 'MÉTODOS NUMÉRICOS\nSI1813\nHERRERA ZARATE JOSE GABRIEL', lunes: '07:00 - 08:00\nLC4', martes: '07:00 - 08:00\nLC4', miercoles: '07:00 - 08:00\nLC4', jueves: '07:00 - 08:00\nLC4', viernes: '', sabado:'' },
	{ dato: '4Z', materia: 'SIMULACION\nSCD1022\nCUSSIN DELGADO MARIO AURELIO', lunes: '09:00 - 10:00\nSC9', martes: '09:00 - 10:00\nSC9', miercoles: '09:00 - 10:00\nSC9', jueves: '09:00 - 10:00\nSC9', viernes: '09:00 - 10:00\nSC9', sabado:'' }
  ]

  sem5 = [
    { dato: '5M', materia: 'ARQ. DE COMPUTADORAS\nSI1823\nRAMOS DOMINGUEZ JACOBO ADRIAN', lunes: '07:00 - 08:00\nSC10', martes: '07:00 - 08:00\nSC10', miercoles: '07:00 - 08:00\nSC10\n15:00 - 17:00\nLED', jueves: '', viernes: '', sabado:'' },
	{ dato: '5Z', materia: 'FUNDAMENTOS DE ING. DE SW\nSI1822\nFLORES NUÑEZ VERONICA', lunes: '11:00 - 12:00\nSC10', martes: '11:00 - 12:00\nSC10', miercoles: '11:00 - 12:00\nSC10', jueves: '11:00 - 12:00\nSC10', viernes: '11:00 - 12:00\nSC10', sabado:'' },
	{ dato: '5Y', materia: 'TALLER DE BASE DE DATOS\nSI1820\nHERNANDEZ CARRILLO IRMA SELENE', lunes: '17:00 - 18:00\nLC4', martes: '17:00 - 18:00\nLC4', miercoles: '17:00 - 18:00\nLC4', jueves: '17:00 - 18:00\nLC4', viernes: '', sabado:'' }
	
  ]

  sem6 = [
    { dato: '6Z', materia: 'ADMINISTRACION DE BASES DE DATOS\nSI1826\nQUIÑONES GARCIA CARLOS', lunes: '07:00 - 08:00\nLC22', martes: '07:00 - 08:00\nLC22', miercoles: '07:00 - 08:00\nLC22', jueves: '07:00 - 08:00\nLC22', viernes: '07:00 - 08:00\nLC22', sabado:'' },
	{ dato: '6Y', materia: 'INGENIERIA DE SOFTWARE\nSI1828\nDOMINGUEZ FLORES ARACELI SOLEDAD', lunes: '08:00 - 09:00\nSC11', martes: '08:00 - 09:00\nSC11', miercoles: '08:00 - 09:00\nSC11', jueves: '08:00 - 09:00\nSC11', viernes: '08:00 - 09:00\nSC11', sabado:'' },
	{ dato: '6A', materia: 'GRAFICACION\nSI1827\nMARTINEZ SAAVEDRA RAFAEL', lunes: '14:00 - 15:00\nSC11', martes: '14:00 - 15:00\nSC11', miercoles: '14:00 - 15:00\nSC11', jueves: '14:00 - 15:00\nSC11', viernes: '14:00 - 15:00\nSC11', sabado:'' },
	{ dato: '6B', materia: 'LENGUAJES DE INTERFAZ\nSCC1014\nSOLIS GALLEGOS JOSE LAURO', lunes: '16:00 - 17:00\nSC11', martes: '16:00 - 17:00\nSC11', miercoles: '16:00 - 17:00\nSC11', jueves: '16:00 - 17:00\nSC11', viernes: '', sabado:'' }
  ]

  sem7 = [
    { dato: '7M', materia: 'CONM. Y ENRUT. DE REDES DE DAT\nSI1831\nRODRIGUEZ ZUÑIGA MARCO ANTONIO', lunes: '09:00 - 10:00\nSC15', martes: '09:00 - 10:00\nSC15', miercoles: '09:00 - 10:00\nSC15', jueves: '09:00 - 10:00\nSC15', viernes: '09:00 - 10:00\nSC15', sabado:'' },
	{ dato: '7A', materia: 'TALLER DE INVESTIGACION I\nSI1832\nZAMORA LERMA MARIA DEL RAYO', lunes: '08:00 - 09:00\nSC8', martes: '08:00 - 09:00\nSC8', miercoles: '08:00 - 09:00\nSC8', jueves: '08:00 - 09:00\nSC8', viernes: '', sabado:'' },
	{ dato: '7B', materia: 'SISTEMAS PROGRAMABLES\nSI1834\nVALDEZ GUTIERREZ JOSE RAMON', lunes: '19:00 - 20:00\nSC15', martes: '19:00 - 20:00\nSC15', miercoles: '19:00 - 20:00\nSC15', jueves: '19:00 - 20:00\nSC15', viernes: '', sabado:'' }
  ]

  sem8 = [
    { dato: '8M', materia: 'ADMINISTRACION DE REDES\nSI1836\nVALDEZ HERNANDEZ SERGIO', lunes: '08:00 - 09:00\nSC16', martes: '08:00 - 09:00\nSC16', miercoles: '08:00 - 09:00\nSC16', jueves: '08:00 - 09:00\nSC16', viernes: '', sabado:'' },
	{ dato: '8Z', materia: 'PROGRAMACION LOGICA Y FUNCIONA\nSI1835\nNUÑEZ ROCHA HECTOR FRANCISCO', lunes: '10:00 - 11:00\nLC3', martes: '10:00 - 11:00\nLC3', miercoles: '10:00 - 11:00\nLC3', jueves: '10:00 - 11:00\nLC3', viernes: '', sabado:'' },
	{ dato: '8A', materia: 'PROGRAMACION WEB\nSI1838\nRODRIGUEZ RIVAS JOSE GABRIEL', lunes: '11:00 - 12:00\nLC23', martes: '11:00 - 12:00\nLC23', miercoles: '11:00 - 12:00\nLC23', jueves: '11:00 - 12:00\nLC23', viernes: '11:00 - 12:00\nLC23', sabado:'' },
	{ dato: '8B', materia: 'TALLER DE INVESTIGACION II\nSI1837\nMARTINEZ SAAVEDRA RAFAEL', lunes: '08:00 - 09:00\nSC13', martes: '08:00 - 09:00\nSC13', miercoles: '08:00 - 09:00\nSC13', jueves: '08:00 - 09:00\nSC13', viernes: '', sabado:'' }
  ]

  sem9 = [
    { dato: '9M', materia: 'INTELIGENCIA ARTIFICIAL\nSI1839\nTORRES IBARRA IVONNE', lunes: '19:00 - 20:00\nSC11', martes: '19:00 - 20:00\nSC11', miercoles: '19:00 - 20:00\nSC11', jueves: '19:00 - 20:00\nSC11', viernes: '', sabado:'' }
  ]
 
}