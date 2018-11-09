import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residencias',
  templateUrl: './residencias.component.html',
  styleUrls: ['./residencias.component.css']
})
export class ResidenciasComponent implements OnInit {
  residencia={folio:"INN",nocrtl:"14041418",nombreAlumno:"Kate Bonilla",
carrera:"Ing. Informatica", seguimiento1:"Entregado",seguimiento2:"Entregado",seguimiento3:"Entregado",
nombreProyecto:"Sistema de administracion",
empresa:"SEED",asesorInt:"Gustavo Higareda",asesorExt:"Armando Ramirez",dictamen:"Aceptado",
 portadaAnt:"Entregado", asesorInt2:"Armando Leonel",
reporteFinal:"Entregado",revFinal:"Entregado"};
  
  constructor() { }

  ngOnInit() {
  }

}
