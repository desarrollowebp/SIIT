import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class prefichaPagoService{
  url = "http://localhost:3000/preficha-pago/";
    constructor(private http: HttpClient) { }

    getprefichaPago() {
    return this.http.get("http://localhost:3000/preficha-pago/");
  }
}
