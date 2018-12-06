import { Component, OnInit } from '@angular/core';
import {horarioReinscripcionService} from './horarioreinscripcion.service';

@Component({
  selector: 'app-horario-reinscripcion',
  templateUrl: './horario-reinscripcion.component.html',
  styleUrls: ['./horario-reinscripcion.component.css']
})
export class HorarioReinscripcionComponent implements OnInit {

  constructor(public service: horarioReinscripcionService) {
     /* service.gethorarioReinscripcion()
      .subscribe((data))*/
     console.log(this.service.gethorarioReinscripcion()
     .subscribe(data => console.log(data)));
   }

  ngOnInit() {
      this.service.gethorarioReinscripcion();
  }


  alumno = [
    { dato: 'Nombre', nombre: 'Alejandro Marrufo Quintana', tipoadeudo: 'Biblioteca', adeudo: 'N' }
  ]
  fecha = [
    { dato: 'Fecha', fecha: '18-Agosto-2018', tipoadeudo: 'Escolares', adeudo: 'N' }
  ]
  hora = [
    { dato: 'Hora', hora: '10:40AM', tipoadeudo: 'Financieros', adeudo: 'N' }
  ]
  autorizado = [
    { dato: 'Autorizado', autorizado: 'S', tipoadeudo: 'Encuesta', adeudo: 'N' }
  ]

}
