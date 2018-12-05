import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class SeleccionMateriassDataService{

  	constructor(private http: HttpClient) { }

	getMaterias(){
		console.log("aiuda!!!");
		return this.http.get('/assets/mocks/alumnos.json');
	}

	getAlumno(){
		console.log("aiuda!!!");
		return this.http.get('/assets/mocks/alumno.json');
	}

	insertAlumno(alumno){
		console.log(alumno);
		console.log("insertando");
		//debugger;
		return this.http.put("http://localhost:3000/alumnos/", alumno);
	}
}
