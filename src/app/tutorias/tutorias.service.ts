import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class TutoriasService {
  constructor(private http: HttpClient) { }

  getTutorTutoria() {
   return this.http.get('http://localhost:3000/tutorias/') ;
  }
}
