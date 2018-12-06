import { Component,Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-seleccion-materias',
  templateUrl: './post-seleccion-materias.component.html',
  styleUrls: ['./post-seleccion-materias.component.css']
})

export class PostSeleccionMateriasComponent implements OnInit {

    order: string     ;
    constructor(private route: ActivatedRoute) { }
    orderObj= { };
  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
     this.orderObj=queryParams.materiasSeleccionadas;
      console.log('Data: ', this.orderObj);
    });

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
