import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluacion-docente-comprobante',
  templateUrl: './evaluacion-docente-comprobante.component.html',
  styleUrls: ['./evaluacion-docente-comprobante.component.css']
})
export class EvaluacionDocenteComprobanteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fechaActual = (new Date()).toLocaleString()

  imprimirPagina() {
    window.print()
  }
}
