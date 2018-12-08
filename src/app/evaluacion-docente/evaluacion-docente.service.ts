import { Injectable } from '@angular/core';
import { PreguntasEvaluaciones } from './preguntasEvaluaciones'
import { MaestrosMaterias } from './maestrosMaterias'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EvaluacionDocenteService {
  constructor(private http: HttpClient) { }

  getPreguntasEvaluaciones() {
    return this.http.get<PreguntasEvaluaciones>('http://localhost:3000/preguntas-evaluaciones')
  }

  getMaestrosMaterias() {
    return this.http.get<MaestrosMaterias>('http://localhost:3000/maestros-materias')
  }

  postRespuestasEvaluaciones(data) {
    return this.http.post('http://localhost:3000/respuestas-evaluaciones', data)
  }
}


