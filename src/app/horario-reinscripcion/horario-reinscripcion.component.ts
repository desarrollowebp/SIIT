import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horario-reinscripcion',
  templateUrl: './horario-reinscripcion.component.html',
  styleUrls: ['./horario-reinscripcion.component.css']
})
export class HorarioReinscripcionComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }


  alumno = [
    { dato: 'Nombre', nombre: 'Alejandro Marrufo Quintana', tipoadeudo: 'Biblioteca', adeudo: 'N' }
  ]
  fecha = [
    { dato: 'Fecha', fecha: '18-Agosto-2018', tipoadeudo: 'Escolares', adeudo: 'N' }
  ]
  hora = [
    { dato: 'Hora', hora: '10:40AM', tipoadeudo: 'Financieros', adeudo: 'N' }
  ]
  autorizado = [
    { dato: 'Autorizado', autorizado: 'S', tipoadeudo: 'Encuesta', adeudo: 'N' }
  ]

}
