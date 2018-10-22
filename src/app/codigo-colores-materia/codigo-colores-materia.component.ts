import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-codigo-colores-materia',
  templateUrl: './codigo-colores-materia.component.html',
  styleUrls: ['./codigo-colores-materia.component.css']
})
export class CodigoColoresMateriaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".submenu_12").click(function() {
      $(this).children("ul").slideToggle();

    }
    )

    $("ul").click(function(p) {
      p.stopPropagation();
    })

    if ($(window).width() > 720) {


      $(".submenu_12").children("ul").show();



    }
    else {

    }


}
}
