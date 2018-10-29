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
}