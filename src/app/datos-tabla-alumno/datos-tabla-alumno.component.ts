import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-tabla-alumno',
  templateUrl: './datos-tabla-alumno.component.html',
  styleUrls: ['./datos-tabla-alumno.component.css']
})
export class DatosTablaAlumnoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
alumno=
[
  {
    dato:'No. Control',control:'14041403',nombre:'Aurora Gamero Pescador',periodo:'Ago-Dic',promedio:'100.00'
  }
]

datos=
[
  {
    dato:'Carrera',carrera:'Ingeniera en tecnologias de la Información y Comunicación',especialidad:'Tecnologías Web',curp:'VAVA960417MDGLLL00'
  }
]
}