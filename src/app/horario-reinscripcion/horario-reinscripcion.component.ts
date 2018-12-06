import { Component, OnInit } from '@angular/core';
import {horarioReinscripcionService} from './horarioreinscripcion.service';
@Component({
  selector: 'app-horario-reinscripcion',
  templateUrl: './horario-reinscripcion.component.html',
  styleUrls: ['./horario-reinscripcion.component.css']
})


export class HorarioReinscripcionComponent implements OnInit {
//    datoshorarior:
  datosreinscripcion;


  constructor(public service: horarioReinscripcionService) {

     service.gethorarioReinscripcion().subscribe((data)=>{
      this.datosreinscripcion=data;
      this.datosreinscripcion=this.datosreinscripcion.datosHorario;
      console.log(this.datosreinscripcion);
      });

    /*
    console.log(this.service.gethorarioReinscripcion()
     .subscribe(data => console.log(data)));*/
   }

  ngOnInit() {
      this.service.gethorarioReinscripcion();
  }
/*
  datosreinscripcion = [{
    autorizado: "NO",
    biblioteca: "NO",
    encuesta: "NO",
    escolares: "NO",
    financieros: "NO",
    fecha: "20/11/2018",
    grupo: "1M",
    hora: "10:40",
    nombres: "Alejandro Marrufo Quintana"
  }];*/



}
