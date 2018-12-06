import { Injectable } from '@angular/core';
import { prefichasPagos } from './prefichasPagos'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PrefichaPagoService {
  constructor(private http: HttpClient) { }

  getPrefichasPagos() {
    return this.http.get<PrefichasPagos>('http://localhost:3000/preficha-pago')
  }
}
