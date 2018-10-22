import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avance-materia-alumno',
  templateUrl: './avance-materia-alumno.component.html',
  styleUrls: ['./avance-materia-alumno.component.css']
})
export class AvanceMateriaAlumnoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".submenu_11").click(function() {
     $(this).children("ul").slideToggle();

   }
   )

   $("ul").click(function(p) {
     p.stopPropagation();
   })

   if ($(window).width() > 720) {


     $(".submenu_11").children("ul").show();



   }
   else {

   }

  }

}
