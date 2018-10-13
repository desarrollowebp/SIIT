import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {
  constructor() { }
  ngOnInit() {  }

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
