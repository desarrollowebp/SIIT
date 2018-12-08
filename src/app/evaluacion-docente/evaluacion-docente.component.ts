import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"
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
  respuestas:object = {}
  preguntas:PreguntaEvaluacion[]
  maestros:MaestroMateria[]

  constructor(private service: EvaluacionDocenteService, private router: Router) {
    this.service
      .getPreguntasEvaluaciones()
      .subscribe((data:PreguntasEvaluaciones) => {
        this.preguntas = data.preguntas
      }, console.error)

    this.service
      .getMaestrosMaterias()
      .subscribe((data:MaestrosMaterias) => {
        this.maestros = data.maestros
      }, console.error)
  }

  cambiaRespuesta(event, pregunta, materia) {
    this.respuestas[materia] = (this.respuestas[materia] || [])
    this.respuestas[materia][pregunta] = event.target.value
  }

  finalizarEvaluacion() {
    for (const maestro of this.maestros) {
      if (this.respuestas[maestro.materia]) {
        this.respuestas[maestro.materia] = this.respuestas[maestro.materia].filter(data => typeof data === 'string')
        if (this.respuestas[maestro.materia].length === this.preguntas.length) {
          let data = [];

          for (const materia in this.respuestas) {
            data.push({ materia, respuestas: this.respuestas[materia] })
          }

          this.service
            .postRespuestasEvaluaciones(data)
            .subscribe(() => {
              this.router.navigate(['/evaluacionDocente/comprobante'])
            }, console.error)
        } else {
          return alert('Faltan respuestas!')
        }
      } else {
        return alert('Faltan respuestas!')
      }
    }
  }

  ngOnInit() { }
}
