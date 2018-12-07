import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map} from 'rxjs/operators';

import {isNullOrUndefined} from 'util';
// import swal from 'sweetalert2';


// la url debe de traerse de algun lada externo para que se global para todos los programados 
// y si se queria cambiar la direccion del servidor aparte sera necesario entrar en cada archivo
import { Injectable } from '@angular/core';
import { MapOperator } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
URL_RAIZ = 'http://localhost:3000';


  constructor(public http: HttpClient, ) {
  this.obtenerPreguntas();

  }
  headers: HttpHeaders =  new HttpHeaders({
    "Content-Type" : "application/json"

  });

  obtenerPreguntas() {
const url = `${this.URL_RAIZ}/api/auditoria`;
console.log(url);
return this.http.get(url);

  }

  registrar( auditoria) {
    let url = this.URL_RAIZ + '/api/responauditoria';
return this.http.post(url, auditoria, {headers: this.headers});
}


}