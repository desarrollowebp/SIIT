import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluacion-docente',
  templateUrl: './evaluacion-docente.component.html',
  styleUrls: ['./evaluacion-docente.component.css']
})
export class EvaluacionDocenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  preguntas = [
    'Cuando?',
    'Donde?',
    'Quien?',
  ]
  maestros = [
    {nombre: 'Sofia', materia: 'Estadistica'},
    {nombre: 'Miguel', materia: 'Historia'},
    {nombre: 'Betty', materia: 'Teoria Lineal'},
  ]
}
