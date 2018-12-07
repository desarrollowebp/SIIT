import { Injectable } from '@angular/core';
import { TutoresTutorias } from './tutoresTutorias'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TutoriasService {
  constructor(private http: HttpClient) { }

  getTutorTutoria() {
    return this.http.get<TutoresTutorias>('http://localhost:3000/tutores-tutorias')
  }
}
