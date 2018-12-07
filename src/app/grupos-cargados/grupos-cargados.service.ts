import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GruposCargadosService {
  url = "http://localhost:3000/grupos-cargados";
  constructor(private http: HttpClient) { }

  getGruposCargados() {
    return this.http.get("http://localhost:3000/grupos-cargados")
  }
}