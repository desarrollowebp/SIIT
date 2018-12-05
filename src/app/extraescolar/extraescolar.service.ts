import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExtraescolarService{
    url = "http://localhost:3000/extraescolar-maestros/";
    constructor(private http: HttpClient) { }


    getCreditosComplementarios(){

    }

    getExtraescolares(){

    }

    getGruposDisponibles(){
        return this.http.get("http://localhost:3000/extraescolar-maestros/");
    }

    insertaExtraSeleccionada(){

    }




}
