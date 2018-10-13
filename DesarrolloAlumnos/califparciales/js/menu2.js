var modal = document.getElementById('myModal');

// Get the button that opens the modal

var btn = document.getElementsByClassName("myBtn");
var btnCancelar=document.getElementById("btn-cancelar");
var btnSeleccionar=document.getElementById("btn-seleccionar");
var btnSeleccionar2=document.getElementById("btn-seleccionar2");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function myFunction() {
    modal.style.display = "block";
}
// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
btnCancelar.onclick = function() {
    modal.style.display = "none";
}

btnSeleccionar.onclick = function() {
    modal.style.display = "none";
}

btnSeleccionar2.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
    if (event.target == modal) {
      /*
        modal.style.display = "none";
        */
    }
}

//--------------------TABLE---------------------------------

(function(){
    'use strict';
	var $ = jQuery;
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
})(jQuery);

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
