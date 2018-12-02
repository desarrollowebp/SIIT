import { Injectable } from '@angular/core';
import { PreguntasEvaluaciones } from './preguntasEvaluaciones'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EvaluacionDocenteService {
  constructor(private http: HttpClient) { }

  getPreguntasEvaluacion() {
    return this.http.get<PreguntasEvaluaciones>('http://localhost:3000/preguntas-evaluaciones')
  }
}

