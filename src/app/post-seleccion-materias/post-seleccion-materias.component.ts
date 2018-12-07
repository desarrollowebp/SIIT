import { Component,Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post-seleccion-materias',
  templateUrl: './post-seleccion-materias.component.html',
  styleUrls: ['./post-seleccion-materias.component.css']
})
export class PostSeleccionMateriasComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
 paramse=[{}];
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
       
        console.log(this.paramse);
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
