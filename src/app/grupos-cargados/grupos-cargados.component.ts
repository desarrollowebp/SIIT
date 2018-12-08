import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {GruposCargadosService} from './grupos-cargados.service';
@Component({
  selector: 'app-grupos-cargados',
  templateUrl: './grupos-cargados.component.html',
  styleUrls: ['./grupos-cargados.component.css']
})
export class GruposCargadosComponent implements OnInit {
grupos;
  constructor(public cargar: GruposCargadosService) {
		this.cargar.getGruposCargados().subscribe(data => { console.log(data) });
	/*	cargar.getGruposCargados().subscribe((data)=>{
      this.grupos=data;
      this.grupos=this.grupos.gruposC;
      console.log(this.grupos);
      });*/
	}

  ngOnInit() {
	this.cargar.getGruposCargados();																					 
		
  	//inicio del funcionamiento del filtro
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
});

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
	//$('[data-toggle="tooltip"]').tooltip();
})
  	//fin del funcionamineto del filtro

  	//inicio del funcionamiento de los botones que especifican los semestres
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

// fin del funcionamiento de los botones que especifican los semestres


/*inicio del llenado de la tabla
  titulo = [
    { tgrupo: 'Gpo-Sem', tmateria: 'Materia', tlunes: 'Lunes', tmartes: 'Martes', tmiercoles: 'Miercoles', tjueves: 'Jueves', tviernes: 'Viernes', tsabado:'Sabado' }
  ]
  grupo = [
    { grupo: '1M', materia: 'CALCULO DIFERENCIAL\n', codigo: 'CO1001\n', facilitador: 'VILLARREAL REYES ELIZABETH SORAYA', lunes: '17:00 - 18:00\n', salonl: 'EE10', martes: '17:00 - 18:00\n', salonma: 'EE10', miercoles: '17:00 - 18:00\n', salonmi: 'EE10', jueves: '17:00 - 18:00\n', salonj: 'EE10', viernes: '17:00 - 18:00\n', salonv: 'EE10', sabado:'', salons: '' },
	{ grupo: '1Z', materia: 'FUNDAMENTOS DE PROGRAMACION\n', codigo: 'SI1800\n', facilitador: 'CALZADA TERRONES JEORGINA', lunes: '07:00 - 08:00\n', salonl: 'LC23', martes: '07:00 - 08:00\n', salonma: 'LC23', miercoles: '07:00 - 08:00\n', salonmi: 'LC23', jueves: '07:00 - 08:00\n', salonj: 'LC23', viernes: '07:00 - 08:00\n', salonv: 'LC23', sabado:'', salons: '' },
	{ grupo: '1Y', materia: 'CALCULO DIFERENCIAL\n', codigo: 'CO1001\n', facilitador: 'FAVILA HERRERA LEONEL HUGO', lunes: '11:00 - 12:00\n', salonl: 'SC6', martes: '11:00 - 12:00\n', salonma: 'SC6', miercoles: '11:00 - 12:00\n', salonmi: 'SC6', jueves: '11:00 - 12:00\n', salonj: 'SC6', viernes: '11:00 - 12:00\n', salonv: 'SC6', sabado:'', salons: '' },
	{ grupo: '1A', materia: 'TALLER DE ETICA\n', codigo: 'CO1006\n', facilitador: 'REYES OJEDA TOMAS', lunes: '09:00 - 10:00\n', salonl: 'SC6', martes: '09:00 - 10:00\n', salonma: 'SC6', miercoles: '09:00 - 10:00\n', salonmi: 'SC6', jueves: '09:00 - 10:00\n', salonj: 'SC6', viernes: '09:00 - 10:00\n', salonv: 'SC6', sabado:'', salons: '' },
	{ grupo: '1B', materia: 'MATEMATICAS DISCRETAS\n', codigo: 'SI1801\n', facilitador: 'RIVERA SAUCEDO ELDA', lunes: '10:00 - 11:00\n', salonl: 'SC6', martes: '10:00 - 11:00\n', salonma: 'SC6', miercoles: '10:00 - 11:00\n', salonmi: 'SC6', jueves: '10:00 - 11:00\n', salonj: 'SC6', viernes: '10:00 - 11:00\n', salonv: 'SC6', sabado:'', salons: '' }
	];

	
/*
//db.gruposcarg.insert({ grupo: '4M', materia: 'MÉTODOS NUMÉRICOS\n', codigo: 'SI1813\n', facilitador: 'HERRERA ZARATE JOSE GABRIEL', lunes: '07:00 - 08:00\n', salonl: 'LC4', martes: '07:00 - 08:00\n', salonma: 'LC4', miercoles: '07:00 - 08:00\n', salonmi: 'LC4', jueves: '07:00 - 08:00\n', salonj: 'LC4', viernes: '', salonv: '', sabado:'', salons: '' })


  sem2 = [
    { grupo: '2M', materia: 'CALCULO INTEGRAL\n', codigo: 'ACF0902\n', facilitador: 'REYES MARTINEZ LUIS GUSTAVO', lunes: '07:00 - 08:00\n', salonl: 'QB6', martes: '07:00 - 08:00\n', salonma: 'QB6', miercoles: '07:00 - 08:00\n', salonmi: 'QB6', jueves: '07:00 - 08:00\n', salonj: 'QB6', viernes: '07:00 - 08:00\n', salonv: 'QB6', sabado:'', salons: '' },
	{ grupo: '2Z', materia: 'ALGEBRA LINEAL\n', codigo: 'CO1003\n', facilitador: 'VARELA RAMIREZ CESAR PORFIRIO', lunes: '16:00 - 17:00\n', salonl: 'EE3', martes: '16:00 - 17:00\n', salonma: 'EE3', miercoles: '16:00 - 17:00\n', salonmi: 'EE3', jueves: '16:00 - 17:00\n', salonj: 'EE3', viernes: '16:00 - 17:00\n', salonv: 'EE3', sabado:'', salons: '' },
	{ grupo: '2Y', materia: 'PROGRAMACION ORIENTADA A OBJETOS\n', codigo: 'AED1286\n', facilitador: 'RUIZ CARRETE J GUADALUPE', lunes: '08:00 - 09:00\n', salonl: 'LC4', martes: '08:00 - 09:00\n', salonma: 'LC4', miercoles: '08:00 - 09:00\n', salonmi: 'LC4', jueves: '08:00 - 09:00\n', salonj: 'LC4', viernes: '08:00 - 09:00\n', salonv: 'LC4', sabado:'', salons: '' },
	{ grupo: '2A', materia: 'QUIMICA\n', codigo: 'AEC1058\n', facilitador: 'HERNANDEZ VELAZQUEZ RAFAEL', lunes: '10:00 - 11:00\n', salonl: 'SC7', martes: '10:00 - 11:00\n', salonma: 'SC7', miercoles: '10:00 - 11:00\n', salonmi: 'SC7', jueves: '10:00 - 11:00\n', salonj: 'SC7', viernes: '', salonv: '', sabado:'', salons: '' }
  ]

  sem3 = [
    { grupo: '3M', materia: 'INVESTIGACION DE OPERACIONES\n', codigo: 'SCC1013\n', facilitador: 'BUTZMANN ALVAREZ LAURA GUADALUPE', lunes: '07:00 - 08:00\n', salonl: 'SC8', martes: '07:00 - 08:00\n', salonma: 'SC8', miercoles: '07:00 - 08:00\n', salonmi: 'SC8', jueves: '07:00 - 08:00\n', salonj: 'SC8', viernes: '', salonv: '', sabado:'', salons: '' },
	{ grupo: '3Z', materia: 'DESARROLLO SUSTENTABLE\n', codigo: 'IT8833\n', facilitador: 'LUGO MORALES GABRIEL ARTURO', lunes: '11:00 - 12:00\n', salonl: 'SC8', martes: '11:00 - 12:00\n', salonma: 'SC8', miercoles: '11:00 - 12:00\n', salonmi: 'SC8', jueves: '11:00 - 12:00\n', salonj: 'SC8', viernes: '11:00 - 12:00\n', salonv: 'SC8', sabado:'', salons: '' },
	{ grupo: '3B', materia: 'CULTURA EMPRESARIAL\n', codigo: 'SI1808\n', facilitador: 'AVITIA ROCHA BRENDA DE LA LUZ', lunes: '12:00 - 13:00\n', salonl: 'SC8', martes: '12:00 - 13:00\n', salonma: 'SC8', miercoles: '12:00 - 13:00\n', salonmi: 'SC8', jueves: '12:00 - 13:00\n', salonj: 'SC8', viernes: '', salonv: '', sabado:'', salons: '' }
  ]

  sem4 = [
    { grupo: '4M', materia: 'MÉTODOS NUMÉRICOS\n', codigo: 'SI1813\n', facilitador: 'HERRERA ZARATE JOSE GABRIEL', lunes: '07:00 - 08:00\n', salonl: 'LC4', martes: '07:00 - 08:00\n', salonma: 'LC4', miercoles: '07:00 - 08:00\n', salonmi: 'LC4', jueves: '07:00 - 08:00\n', salonj: 'LC4', viernes: '', salonv: '', sabado:'', salons: '' },
	{ grupo: '4Z', materia: 'SIMULACION\n', codigo: 'SCD1022\n', facilitador: 'CUSSIN DELGADO MARIO AURELIO', lunes: '09:00 - 10:00\n', salonl: 'SC9', martes: '09:00 - 10:00\n', salonma: 'SC9', miercoles: '09:00 - 10:00\n', salonmi: 'SC9', jueves: '09:00 - 10:00\n', salonj: 'SC9', viernes: '09:00 - 10:00\n', salonv: 'SC9', sabado:'', salons: '' }
  ]

  sem5 = [
	{ grupo: '5Z', materia: 'FUNDAMENTOS DE ING. DE SW\n', codigo: 'SI1822\n', facilitador: 'FLORES NUÑEZ VERONICA', lunes: '11:00 - 12:00\n', salonl: 'SC10', martes: '11:00 - 12:00\n', salonma: 'SC10', miercoles: '11:00 - 12:00\n', salonmi: 'SC10', jueves: '11:00 - 12:00\n', salonj: 'SC10', viernes: '11:00 - 12:00\n', salonv: 'SC10', sabado:'', salons: '' },
	{ grupo: '5Y', materia: 'TALLER DE BASE DE DATOS\n', codigo: 'SI1820\n', facilitador: 'HERNANDEZ CARRILLO IRMA SELENE', lunes: '17:00 - 18:00\n', salonl: 'LC4', martes: '17:00 - 18:00\n', salonma: 'LC4', miercoles: '17:00 - 18:00\n', salonmi: 'LC4', jueves: '17:00 - 18:00\n', salonj: 'LC4', viernes: '', salonv: '', sabado:'', salons: '' }
  ]

  sem6 = [
    { grupo: '6Z', materia: 'ADMINISTRACION DE BASES DE DATOS\n', codigo: 'SI1826\n', facilitador: 'QUIÑONES GARCIA CARLOS', lunes: '07:00 - 08:00\n', salonl: 'LC22', martes: '07:00 - 08:00\n', salonma: 'LC22', miercoles: '07:00 - 08:00\n', salonmi: 'LC22', jueves: '07:00 - 08:00\n', salonj: 'LC22', viernes: '07:00 - 08:00\n', salonv: 'LC22', sabado:'', salons: '' },
	{ grupo: '6Y', materia: 'INGENIERIA DE SOFTWARE\n', codigo: 'SI1828\n', facilitador: 'DOMINGUEZ FLORES ARACELI SOLEDAD', lunes: '08:00 - 09:00\n', salonl: 'SC11', martes: '08:00 - 09:00\n', salonma: 'SC11', miercoles: '08:00 - 09:00\n', salonmi: 'SC11', jueves: '08:00 - 09:00\n', salonj: 'SC11', viernes: '08:00 - 09:00\n', salonv: 'SC11', sabado:'', salons: '' },
	{ grupo: '6A', materia: 'GRAFICACION\n', codigo: 'SI1827\n', facilitador: 'MARTINEZ SAAVEDRA RAFAEL', lunes: '14:00 - 15:00\n', salonl: 'SC11', martes: '14:00 - 15:00\n', salonma: 'SC11', miercoles: '14:00 - 15:00\n', salonmi: 'SC11', jueves: '14:00 - 15:00\n', salonj: 'SC11', viernes: '14:00 - 15:00\n', salonv: 'SC11', sabado:'', salons: '' },
	{ grupo: '6B', materia: 'LENGUAJES DE INTERFAZ\n', codigo: 'SCC1014\n', facilitador: 'SOLIS GALLEGOS JOSE LAURO', lunes: '16:00 - 17:00\n', salonl: 'SC11', martes: '16:00 - 17:00\n', salonma: 'SC11', miercoles: '16:00 - 17:00\n', salonmi: 'SC11', jueves: '16:00 - 17:00\n', salonj: 'SC11', viernes: '', salonv: '', sabado:'', salons: '' }
  ]

  sem7 = [
    { grupo: '7M', materia: 'CONM. Y ENRUT. DE REDES DE DAT\n', codigo: 'SI1831\n', facilitador: 'RODRIGUEZ ZUÑIGA MARCO ANTONIO', lunes: '09:00 - 10:00\n', salonl: 'SC15', martes: '09:00 - 10:00\n', salonma: 'SC15', miercoles: '09:00 - 10:00\n', salonmi: 'SC15', jueves: '09:00 - 10:00\n', salonj: 'SC15', viernes: '09:00 - 10:00\n', salonv: 'SC15', sabado:'', salons: '' },
	{ grupo: '7A', materia: 'TALLER DE INVESTIGACION I\n', codigo: 'SI1832\n', facilitador: 'ZAMORA LERMA MARIA DEL RAYO', lunes: '08:00 - 09:00\n', salonl: 'SC8', martes: '08:00 - 09:00\n', salonma: 'SC8', miercoles: '08:00 - 09:00\n', salonmi: 'SC8', jueves: '08:00 - 09:00\n', salonj: 'SC8', viernes: '', salonv: '', sabado:'', salons: '' },
	{ grupo: '7B', materia: 'SISTEMAS PROGRAMABLES\n', codigo: 'SI1834\n', facilitador: 'VALDEZ GUTIERREZ JOSE RAMON', lunes: '19:00 - 20:00\n', salonl: 'SC15', martes: '19:00 - 20:00\n', salonma: 'SC15', miercoles: '19:00 - 20:00\n', salonmi: 'SC15', jueves: '19:00 - 20:00\n', salonj: 'SC15', viernes: '', salonv: '', sabado:'', salons: '' }
  ]

  sem8 = [
    { grupo: '8M', materia: 'ADMINISTRACION DE REDES\n', codigo: 'SI1836\n', facilitador: 'VALDEZ HERNANDEZ SERGIO', lunes: '08:00 - 09:00\n', salonl: 'SC16', martes: '08:00 - 09:00\n', salonma: 'SC16', miercoles: '08:00 - 09:00\n', salonmi: 'SC16', jueves: '08:00 - 09:00\n', salonj: 'SC16', viernes: '', salonv: '', sabado:'', salons: '' },
	{ grupo: '8Z', materia: 'PROGRAMACION LOGICA Y FUNCIONA\n', codigo: 'SI1835\n', facilitador: 'NUÑEZ ROCHA HECTOR FRANCISCO', lunes: '10:00 - 11:00\n', salonl: 'LC3', martes: '10:00 - 11:00\n', salonma: 'LC3', miercoles: '10:00 - 11:00\n', salonmi: 'LC3', jueves: '10:00 - 11:00\n', salonj: 'LC3', viernes: '', salonv: '', sabado:'', salons: '' },
	{ grupo: '8A', materia: 'PROGRAMACION WEB\n', codigo: 'SI1838\n', facilitador: 'RODRIGUEZ RIVAS JOSE GABRIEL', lunes: '11:00 - 12:00\n', salonl: 'LC23', martes: '11:00 - 12:00\n', salonma: 'LC23', miercoles: '11:00 - 12:00\n', salonmi: 'LC23', jueves: '11:00 - 12:00\n', salonj: 'LC23', viernes: '11:00 - 12:00\n', salonv: 'LC23', sabado:'', salons: '' },
	{ grupo: '8B', materia: 'TALLER DE INVESTIGACION II\n', codigo: 'SI1837\n', facilitador: 'MARTINEZ SAAVEDRA RAFAEL', lunes: '08:00 - 09:00\n', salonl: 'SC13', martes: '08:00 - 09:00\n', salonma: 'SC13', miercoles: '08:00 - 09:00\n', salonmi: 'SC13', jueves: '08:00 - 09:00\n', salonj: 'SC13', viernes: '', salonv: '', sabado:'', salons: '' }
  ]

  sem9 = [
    { grupo: '9M', materia: 'INTELIGENCIA ARTIFICIAL\n', codigo: 'SI1839\n', facilitador: 'TORRES IBARRA IVONNE', lunes: '19:00 - 20:00\n', salonl: 'SC11', martes: '19:00 - 20:00\n', salonma: 'SC11', miercoles: '19:00 - 20:00\n', salonmi: 'SC11', jueves: '19:00 - 20:00\n', salonj: 'SC11', viernes: '', salonv: '', sabado:'', salons: '' }
  ]
 
/ fin del llenado de la tabla*/
}