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

preguntas : Tpregunta[] = [
  {
    "servicio" :"Centro de Informacion",
    "pregunta1":"1.-¿Tiene un horario adecuado de consulta?",
    "pregunta2":"2.-¿La informacion con la que cuenta me apoya en las asignaturas que curso?",
    "pregunta3":"3.-¿Siempre encuentro por lo menos un ejemplar disponible de la biografia señalada en las asignaturas?",
    "pregunta4":"4.-¿La bibliografia de la que se dispone es actualizada?",
    "pregunta5":"5.-¿Se me proporciona atencion adecuada en caso de buscar determinado libro?",
    "pregunta6":"6.-¿Me orientan adecuadamente para encontrar en caso de carencia, libros equivalentes al requerido?",
    "pregunta7":"7.-¿Tienen disposicion para atenderme cuando solicito apoyo?",
    "pregunta8":"8.-¿Me atienden en forma amable cuando solicito su apoyo?",
    "pregunta9":"9.-¿Mantienen una relacion atenta conmigo durante mi estancia?"
},
{
  "servicio" :"Coordinacion de Carreras",
  "pregunta1":"1.-¿Tiene un Horario de atencion?",
  "pregunta2":"2.-¿Me proporciona informacion necesaria para el manejo de mi reticula de carrera?",
  "pregunta3":"3.-¿Me da orientacion adecuada cuando requiero realizar tramites en la institucion?",
  "pregunta4":"4.-¿Me orienta acerca de desarrollo del plan de estudios de la carrera?",
  "pregunta5":"5.-¿Me da información necesaria para realizar las Residencias profesionales?",
  "pregunta6":"6.-¿Me proporciona información sobre el proceso para la reinscripción de estudiantes?",
    "pregunta7":"7.-¿Me orientan para resolver situaciones de tipo académico?",
    "pregunta8":"8.-¿Me dan la orientación necesaria para la realización de trámites de titulación?",
    "pregunta9":"9.-¿Me proporciona información sobre el calendario escolar?"
},
{
  "servicio": "Recursos Financieros",
    "pregunta1":"1.-¿Tiene un horario adecuado para realizar mis trámites?",
    "pregunta2":"2.-¿Me proporcionan una lista actualizada de los costos de los diferentes trámites?",
    "pregunta3":"3.-¿El tiempo de espera para pagar en caja de recursos financieros es aceptable?",
    "pregunta4":"4.-¿El personal de Recursos Financieros atiende las peticiones que le hago?",
    "pregunta5":"5.-¿El personal de Recursos Financieros siempre me cobra el concepto correcto?",
    "pregunta6":"6.-¿Me proporcionan asesoría adecuada cuando desconozco qué o cuánto pagar?",
    "pregunta7":"7.-¿Me atienden en forma oportuna cuando solicito un servicio?",
    "pregunta8":"8.-¿Me atienden en forma amable cuando solicito un servicio?",
    "pregunta9":"9.-¿Mantienen una relación atenta conmigo durante todo el tiempo en que me otorga el servicio?"
},

{
  "servicio": "Residencia",
    "pregunta1":"1.-¿El departamento de Gestión Tecnológica y Vinculación me proporciona información del banco de proyectos de Residencias profesionales?",
    "pregunta2":"2.-¿La División de Estudios profesionales me da información de las opciones para realizar los anteproyectos de Residencias profesionales?",
    "pregunta3":"3.-¿El coordinador de carrera me da información para desarrollo de anteproyectos de Residencias profesionales?",
    "pregunta4":"4.-¿La División de Estudios me proporciona información acerca de los periodos para la recepción de anteproyectos de Residencias profesionales?",
    "pregunta5":"5.-¿El docente asignado para revisar mi anteproyecto de residencia dictamina en el periodo establecido?",
    "pregunta6":"6.-¿Mi asesor interno me proporciona asesoria para el desarrollo de mi proyecto de Residencias profesionales?",
    "pregunta7":"7.-¿El departamento de Gestión Tecnológica y Vinculación me entrega en tiempo las cartas de presentación y agradecimiento para la empresa?",
    "pregunta8":"8.-¿Mi asesor interno revisa mis informes parciales de Residencias profesionales y me orienta para realizar las correciones y cambios?",
    "pregunta9":"9.-¿Mi asesor interno  me da a conocer la calificación durante el periodo establecido?"
},
{
  "servicio": "Centro de Computo",
    "pregunta1":"1.-¿El Servicio de Cómputo tiene un horario adecuado?",
    "pregunta2":"2.-¿Siempre hay máquinas disponibles para realizar mi trabajo?",
    "pregunta3":"3.-¿Siempre tengo disponible una conexion de Internet?",
    "pregunta4":"4.-¿Me proporcionan atención adecuada en el servicio de Internet?",
    "pregunta5":"5.-¿Me proporcionan atención adecuada en caso de presentarse fallas en el equipo que se me asignó?",
    "pregunta6":"6.-¿Me proporcionan asesoría adecuada para resolver mis dudas sobre el uso de software?",
    "pregunta7":"7.-¿Me atienden en forma oportuna cuando solicito cualquier servicio?",
    "pregunta8":"8.-¿Me atienden en forma amable cuando solicito información?",
    "pregunta9":"9.-¿Mantienen una relación atenta conmigo durante toda mi estancia en las instalaciones?"
},
{
  "servicio": "Servicios Escolares",
    "pregunta1":"1.-¿El Departamento de Servicios Escolares tiene un horario adecuado de atención?",
    "pregunta2":"2.-¿El tiempo de respuesta a mis solicitudes es rápido?",
    "pregunta3":"3.-¿El tiempo de espera para ser atendido en la ventanilla es adecuado?",
    "pregunta4":"4.-¿Me proporcionan atención adecuada en el servicio?",
    "pregunta5":"5.-¿Me proporcionan información adecuada en caso de que se la solicite?",
    "pregunta6":"6.-¿Me orientan adecuadamente cuando lo solicito?",
    "pregunta7":"7.-¿Me atienden en forma oportuna cuando solicito un servicio?",
    "pregunta8":"8.-¿Me atienden en forma amable cuando solicito su apoyo?",
    "pregunta9":"9.-¿Mantienen una relación atenta conmigo durante toda mi estancia en el departamento?"
},
{
    "servicio": "Servicios Social",
    "pregunta1":"1.-¿La oficina de servicio social tiene un horario adecuado para realizar mis trámites?",
    "pregunta2":"2.-¿La oficina de servicio social me ofrece un catálogo de instituciones en donde puedo realizarlo?",
    "pregunta3":"3.-¿La oficina de servicio social me gestiona apoyos para desarrollar mis actividades?",
    "pregunta4":"4.-¿Me proporcionan atención adecuada cuando realizo mis trámites?",
    "pregunta5":"5.-¿Me apoyan adecuadamente en la búsqueda, en caso de no tener en donde hacerlo?",
    "pregunta6":"6.-¿Me proporcionan asesoría para desarrollar en forma adecuada el servicio social?",
    "pregunta7":"7.-¿Me atienden en forma inmediata al solicitar información?",
    "pregunta8":"8.-¿Me atienden en forma amable al solicitar información del servicio social?",
    "pregunta9":"9.-¿Matienen una relación atenta conmigo durante toda mi estancia en su oficina?"
},
{
    "servicio": "Laboratorio correspondiente a su Carrera",
    "pregunta1":"1.-¿Los servicios necesarios para la operación de los equipos son suficientes y adecuados?",
    "pregunta2":"2.-¿Los equipos son los suficientes y adecuados para el desarrollo de las prácticas?",
    "pregunta3":"3.-¿Siempre tengo disponible material necesario para mis prácticas?",
    "pregunta4":"4.-¿Me proporcionan atención adecuada durante el desarrollo de mi práctica?",
    "pregunta5":"5.-¿Me proporcionan atención adecuada en caso de presentarse fallas en el equipo que se me asignó?",
    "pregunta6":"6.-¿Me proporcionan asesoría adecuada para resolver mis dudas sobre el desarrollo de la práctica?",
    "pregunta7":"7.-¿Me atienden en forma oportuna cuando solicito cualquier servicio?",
    "pregunta8":"8.-¿Me atienden en forma amable cuando solicito información?",
    "pregunta9":"9.-¿Mantienen una relación atenta conmigo durante toda mi estancia en el laboratorio?"
} 
];

  constructor() { }

  ngOnInit() {
  }

}
