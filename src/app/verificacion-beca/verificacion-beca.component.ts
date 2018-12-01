import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verificacion-beca',
  templateUrl: './verificacion-beca.component.html',
  styleUrls: ['./verificacion-beca.component.css']
})
export class VerificacionBecaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  alumno = [
    { dato: 'Numero de control', numerodecontrol: '14041573', nombre: 'Mariana Venegas Flores' , semestre: '9', periodoescolar: 'Agosto-Diciembre/2018', promacum: '80.91'}
  ]
  carrera = [
    { dato: 'carrera', carrera: 'Ing.Tec.Inf.Com', especialidad: 'Tecnologias Web', curp: 'VEFM941118MDGNLR04', pronabes: 'si' }
  ]
 
}





