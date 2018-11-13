import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residencias',
  templateUrl: './residencias.component.html',
  styleUrls: ['./residencias.component.css']
})
export class ResidenciasComponent implements OnInit {
  residencia={folio:"INN",nocrtl:"14041418",nombreAlumno:"KATE VALERIA BONILLA RAMIREZ",
carrera:"ING. INFORMATICA", seguimiento1:"ENTREGADO",seguimiento2:"ENTREGADO",seguimiento3:"ENTREGADO",
nombreProyecto:"SISTEMA DE ADMINISTRACION",
empresa:"SEED",asesorInt:"GUSTAVO HIGAREDA SOTO",asesorExt:"ARMANDO LEONEL NEVAREZ RAMIREZ",
dictamen:"ACEPTADO",
 portadaAnt:"ENTREGADO", asesorInt2:"ENTREGADO",
reporteFinal:"ENTREGADO",revFinal:"ENTREGADO"};
  
  constructor() { }

  ngOnInit() {
  }

}
