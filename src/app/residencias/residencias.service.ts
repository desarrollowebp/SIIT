import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable ()
export class ResidenciasService {
	constructor(private http: HttpClient){ }

	 getresidencia (){
	 return this.http.get ('Http://localhost:3000/residencias')
	 }
}
