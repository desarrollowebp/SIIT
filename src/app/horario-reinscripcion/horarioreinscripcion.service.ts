///hola
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class horarioReinscripcionService{
    url = "http://localhost:3000/horario-reinscripcion/";
    constructor(private http: HttpClient) { }


    gethorarioReinscripcion(){
        return this.http.get("http://localhost:3000/horario-reinscripcion/");
    }

}
