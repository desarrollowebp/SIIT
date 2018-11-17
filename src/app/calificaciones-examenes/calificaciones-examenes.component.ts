import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calificaciones-examenes',
  templateUrl: './calificaciones-examenes.component.html',
  styleUrls: ['./calificaciones-examenes.component.css']
})
export class CalificacionesExamenesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  examen1 = [
    { facilitador: 'Juan Nava Solís', materia: 'Matemáticas Discretas', calificacion: '84', tipo: 'Especial' }
  ]
  examen2 = [
    { facilitador: 'Roberto López ', materia: 'Seguridad Web', calificacion: '100', tipo: 'Global' }
  ]
  examen3 = [
    { facilitador: 'Elena Orozco Juárez ', materia: 'Contabilidad', calificacion: '78', tipo: 'Global' }
  ]

}
