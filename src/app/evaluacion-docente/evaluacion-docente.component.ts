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
    {maestro: 'Sofia', materia: 'Estadistica'},
    {maestro: 'Miguel', materia: 'Historia'},
    {maestro: 'Betty', materia: 'Quimica'},
    {maestro: 'Roberto', materia: 'Programacion'},
    {maestro: 'Laura', materia: 'Investigacion'},
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
