import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
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
  semestre1= [
    {codigo:'C01001',nombre:"Calculo Diferencial",calif:"95/O1"},
    {codigo:'IT8801',nombre:"Fundamentos de Programación",calif:"80/O1"},
    {codigo:'IT8802',nombre:"Mate, Discretas I",calif:"70/O1"},
    {codigo:'IT8803',nombre:"Introducción a las Tic's ",calif:"92/O1"},
    {codigo:'IT8804',nombre:"Taller de Ética",calif:"70/R2"},
    {codigo:'IT8805',nombre:"Fundamentos de Investigación",calif:"82/O1"}
  ];
  semestre2= [
    {codigo:'C01002',nombre:"Calculo Integral",calif:"95/O1"},
    {codigo:'IT8806',nombre:"Progra. Orientada a Obj.",calif:"80/O1"},
    {codigo:'IT8807',nombre:"Mate, Discretas II",calif:"70/O1"},
    {codigo:'IT8808',nombre:"Probabilidad y estadistica",calif:"92/O1"},
    {codigo:'IT8809',nombre:"Conta. y costos",calif:"70/R2"}
   
  ];
  semestre3= [
    {codigo:'C01002',nombre:"Mate. Aplicadas a las Comunicaciones ",calif:"95/O1"},
    {codigo:'IT8806',nombre:"Estruc. Or. Datos ",calif:"80/O1"},
    {codigo:'IT8807',nombre:"Administración Gerencial",calif:"70/O1"},
    {codigo:'IT8808',nombre:"Fund. Base de Datos",calif:"92/O1"},
    {codigo:'IT8809',nombre:"Elect. y Magnestismo",calif:"70/R2"},
    {codigo:'IT8809',nombre:"Algebra Lineal",calif:"70/R2"}
   
  ];
  semestre4= [
    {codigo:'C01001',nombre:"Calculo Diferencial",calif:"95/O1"},
    {codigo:'IT8806',nombre:"Progra. Orientada a Obj.",calif:"80/O1"},
    {codigo:'IT8807',nombre:"Mate, Discretas II",calif:"70/O1"},
    {codigo:'IT8808',nombre:"Probabilidad y estadistica",calif:"92/O1"},
    {codigo:'IT8805',nombre:"Fundamentos de Investigación",calif:"82/O1"}
  ];
  semestre5= [
    {codigo:'C01001',nombre:"Calculo Diferencial",calif:"95/O1"},
    {codigo:'IT8801',nombre:"Fundamentos de Programación",calif:"80/O1"},
    {codigo:'IT8802',nombre:"Mate, Discretas I",calif:"70/O1"},
    {codigo:'IT8803',nombre:"Introducción a las Tic's ",calif:"92/O1"},
    {codigo:'IT8804',nombre:"Taller de Ética",calif:"70/R2"},
    {codigo:'IT8805',nombre:"Fundamentos de Investigación",calif:"82/O1"}
  ];
  semestre6= [
    {codigo:'C01001',nombre:"Calculo Diferencial",calif:"95/O1"},
    {codigo:'IT8804',nombre:"Taller de Ética",calif:"70/R2"},
    {codigo:'IT8805',nombre:"Fundamentos de Investigación",calif:"82/O1"},
    {codigo:'IT8803',nombre:"Introducción a las Tic's ",calif:"92/O1"},
    {codigo:'IT8807',nombre:"Mate, Discretas II",calif:"70/O1"},
    {codigo:'IT8805',nombre:"Fundamentos de Investigación",calif:"82/O1"}
  ];
  semestre7= [
    {codigo:'IT8804',nombre:"Taller de Ética",calif:"70/R2"},
    {codigo:'IT8805',nombre:"Fundamentos de Investigación",calif:"82/O1"},
    {codigo:'IT8802',nombre:"Mate, Discretas I",calif:"70/O1"},
    {codigo:'IT8803',nombre:"Introducción a las Tic's ",calif:"92/O1"},
    {codigo:'IT8804',nombre:"Taller de Ética",calif:"70/R2"},
    {codigo:'IT8805',nombre:"Fundamentos de Investigación",calif:"82/O1"}
  ];
  semestre8= [
    {codigo:'C01001',nombre:"Calculo Diferencial",calif:"95/O1"},
    {codigo:'IT8806',nombre:"Progra. Orientada a Obj.",calif:"80/O1"},
    {codigo:'IT8804',nombre:"Taller de Ética",calif:"70/R2"},
    {codigo:'IT8807',nombre:"Mate, Discretas II",calif:"70/O1"},
    {codigo:'IT8805',nombre:"Fundamentos de Investigación",calif:"82/O1"}
  ];
  semestre9= [
    {codigo:'C01001',nombre:"Resisdencia Profesional",calif:"95/O1"}
  ]
}
