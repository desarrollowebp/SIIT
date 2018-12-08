import { Component, OnInit } from '@angular/core'
import { PreguntaEvaluacion } from './preguntaEvaluacion'
import { PreguntasEvaluaciones } from './preguntasEvaluaciones'
import { EvaluacionDocenteService } from './evaluacion-docente.service'
import { MaestroMateria } from './maestroMateria';
import { MaestrosMaterias } from './maestrosMaterias';

@Component({
  selector: 'app-evaluacion-docente',
  templateUrl: './evaluacion-docente.component.html',
  styleUrls: ['./evaluacion-docente.component.css']
})
export class EvaluacionDocenteComponent implements OnInit {
  preguntas:PreguntaEvaluacion[]
  maestros:MaestroMateria[]

  constructor(service: EvaluacionDocenteService) {
    service
      .getPreguntasEvaluaciones()
      .subscribe((data:PreguntasEvaluaciones) => {
        this.preguntas = data.preguntas
      })

    service
      .getMaestrosMaterias()
      .subscribe((data:MaestrosMaterias) => {
        this.maestros = data.maestros
      })
  }

  ngOnInit() { }
}
