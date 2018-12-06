import { Component,Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-post-seleccion-materias',
  templateUrl: './post-seleccion-materias.component.html',
  styleUrls: ['./post-seleccion-materias.component.css']
})
export class PostSeleccionMateriasComponent implements OnInit {
  @Input() public kardex;
  constructor() { }

  ngOnInit() {
    $(".submenu").click(function() {
      $(this).children("ul").slideToggle();

    }
    )

    $("ul").click(function(p) {
      p.stopPropagation();
    })

    if ($(window).width() > 720) {


      $(".submenu").children("ul").show();



    }
    else {

    }

  }

}
