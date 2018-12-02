import { Component, OnInit } from '@angular/core'
import { PreguntaEvaluacion } from './preguntaEvaluacion'
import { PreguntasEvaluaciones } from './preguntasEvaluaciones'
import { EvaluacionDocenteService } from './evaluacion-docente.service'

@Component({
  selector: 'app-evaluacion-docente',
  templateUrl: './evaluacion-docente.component.html',
  styleUrls: ['./evaluacion-docente.component.css']
})
export class EvaluacionDocenteComponent implements OnInit {
  preguntas:PreguntaEvaluacion[]

  maestros = [
    {nombre: 'Sofia', materia: 'Estadistica'},
    {nombre: 'Miguel', materia: 'Historia'},
    {nombre: 'Betty', materia: 'Quimica'},
    {nombre: 'Roberto', materia: 'Programacion'},
    {nombre: 'Laura', materia: 'Investigacion'},
  ]

  constructor(evaluacionDocenteService: EvaluacionDocenteService) {
    evaluacionDocenteService
      .getPreguntasEvaluacion()
      .subscribe((data:PreguntasEvaluaciones) => {
        this.preguntas = data.preguntas
      })
  }

  ngOnInit() { }
}
