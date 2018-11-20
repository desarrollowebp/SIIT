import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calificaciones-parciales',
  templateUrl: './calificaciones-parciales.component.html',
  styleUrls: ['./calificaciones-parciales.component.css']
})
export class CalificacionesParcialesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  materia1 = [
    { materia: 'Cálculo Integral', docente: 'Alejandro Valles Ríos', grupo: '3TA', u1: '80', u2: '80', u3: '80', u4: '80', u5: '80', u6: '80', u7: '80', u8: '80', u9: '80', u10: '80' }
  ]
  materia2 = [
    { materia: 'Programación II', docente: 'Perla López Ruíz', grupo: '3TA', u1: '96', u2: '96', u3: '96', u4: '96', u5: '96', u6: '96', u7: '96', u8: '96', u9: '96', u10: '96' }
  ]
  materia3 = [
    { materia: 'Sistemas Operativos', docente: 'Elena Campos Flores', grupo: '3TA', u1: '79', u2: '79', u3: '79', u4: '79', u5: '79', u6: '79', u7: '79', u8: '79', u9: '79', u10: '79' }
  ]
  materia4 = [
    { materia: 'Negocios Electrónicos', docente: 'Luis Bueno Salas', grupo: '3TA', u1: '92', u2: '92', u3: '92', u4: '92', u5: '92', u6: '92', u7: '92', u8: '92', u9: '92', u10: '92' }
  ]
}
