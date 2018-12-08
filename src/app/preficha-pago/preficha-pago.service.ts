import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PrefichaPagoService{
  url = "http://localhost:3000/preficha-pago/";
    constructor(private http: HttpClient) { }

    getPrefichaPago() {
    return this.http.get("http://localhost:3000/preficha-pago/");
  }
}
