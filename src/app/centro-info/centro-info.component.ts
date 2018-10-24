import { Component, OnInit } from '@angular/core';
import { Tpregunta } from '../auditoria-servicio/tipos/pregunta';

@Component({
  selector: 'app-centro-info',
  templateUrl: './centro-info.component.html',
  styleUrls: ['./centro-info.component.css']
})
export class CentroInfoComponent implements OnInit {
  pregunta:Tpregunta={
      "servicio" :"", 
      "pregunta1":"",
      "pregunta2":"",
      "pregunta3":"",
      "pregunta4":"",
      "pregunta5":"",
      "pregunta6":"",
      "pregunta7":"",
      "pregunta8":"",
      "pregunta9":"",
  };

preguntas : Tpregunta[] = [{
    "servicio" :"Centro de Informacion",
    "pregunta1":"1.-¿Tiene un Horario de consulta?",
    "pregunta2":"2.-¿La informacion con la que cuenta me apoya en las asignaturas que curso?",
    "pregunta3":"3.-¿Siempre encuentro por lo menos un ejemplar disponible de la biografia señalada en las asignaturas?",
    "pregunta4":"4.-¿La bibliografia de la que se dispone es actualizada?",
    "pregunta5":"5.-¿Se me proporciona atencion adecuada en caso de buscar determinado libro?",
    "pregunta6":"6.-¿Me orientan adecuadamente para encontrar en caso de carencia, libros equivalentes al requerido?",
    "pregunta7":"7.-¿Tienen disposicion para atenderme cuando solicito apoyo?",
    "pregunta8":"8.-¿Me atienden en forma amable cuando solicito su apoyo?",
    "pregunta9":"9.-¿Mantienen una relacion atenta conmigo durante mi estancia?"
  }  
];

  constructor() { }

  ngOnInit() {
  }

}
