import { Component, OnInit } from '@angular/core';
import {tpregunta} from  './tipos/preguntas';

@Component({
  selector: 'app-auditoria-servicio',
  templateUrl: './auditoria-servicio.component.html',
  styleUrls: ['./auditoria-servicio.component.css']
})
export class AuditoriaServicioComponent implements OnInit {

  pregunta:tpregunta={
  	"id":"",
  	"Pregunta1":"",
  	"Pregunta2":"",
  	"Pregunta3":"",
  	"Pregunta4":"",
  	"Pregunta5":"",
  	"Pregunta6":"",
  	"Pregunta7":"",
  	"Pregunta8":"",
  	"Pregunta9":"",
  };

  preguntas : tpregunta[] =[
  {
  	"id":"Servicion: Centro de Informacion",
  	"Pregunta1":"1.-¿Tiene un Horario de consulta?",
  	"Pregunta2":"2.-¿La informacion con la que cuenta me apoya en las asignaturas que curso?",
  	"Pregunta3":"3.-¿Siempre encuentro por lo menos un ejemplar disponible de la biografia señalada en las asignaturas?",
  	"Pregunta4":"4.-¿La bibliografia de la que se dispone es actualizada?",
  	"Pregunta5":"5.-¿Se me proporciona atencion adecuada en caso de buscar determinado libro?",
  	"Pregunta6":"6.-¿Me orientan adecuadamente para encontrar en caso de carencia, libros equivalentes al requerido?",
  	"Pregunta7":"7.-¿Tienen disposicion para atenderme cuando solicito apoyo?",
  	"Pregunta8":"8.-¿Me atienden en forma amable cuando solicito su apoyo?",
  	"Pregunta9":"9.-¿Mantienen una relacion atenta conmigo durante mi estancia?"
  	  },
  	 {
  	 "id":"Servicion: Coordinacion de Carreras",
  	"Pregunta1":"1.-¿Tiene un Horario de atencion?",
  	"Pregunta2":"2.-¿Me proporciona informacion necesaria para el manejo de mi reticula de carrera?",
  	"Pregunta3":"3.-¿Me da orientacion adecuada cuando requiero realizar tramites en la institucion?",
  	"Pregunta4":"4.-¿Me orienta acerca de desarrollo del plan de estudios de la carrera?",
  	"Pregunta5":"5.-¿Me da información necesaria para realizar las Residencias Profesionales?",
  	"Pregunta6":"6.-¿Me proporciona información sobre el proceso para la reinscripción de estudiantes?",
  	"Pregunta7":"7.-¿Me orientan para resolver situaciones de tipo académico?",
  	"Pregunta8":"8.-¿	Me dan la orientación necesaria para la realización de trámites de titulación?",
  	"Pregunta9":"9.-¿Me proporciona información sobre el calendario escolar?"
  	 },
  	 {
  	 "id":"Servicion: Recursos Financieros",
  	"Pregunta1":"1.-¿Tiene un horario adecuado para realizar mis trámites?",
  	"Pregunta2":"2.-¿Me proporcionan una lista actualizada de los costos de los diferentes trámites?",
  	"Pregunta3":"3.-¿El tiempo de espera para pagar en caja de recursos financieros es aceptable?",
  	"Pregunta4":"4.-¿El personal de Recursos Financieros atiende las peticiones que le hago?",
  	"Pregunta5":"5.-¿El personal de Recursos Financieros siempre me cobra el concepto correcto?",
  	"Pregunta6":"6.-¿Me proporcionan asesoría adecuada cuando desconozco qué o cuánto pagar?",
  	"Pregunta7":"7.-¿Me atienden en forma oportuna cuando solicito un servicio?",
  	"Pregunta8":"8.-¿Me atienden en forma amable cuando solicito un servicio?",
  	"Pregunta9":"9.-¿Mantienen una relación atenta conmigo durante todo el tiempo en que me otorga el servicio?"
  	 },

  	 {
  	 "id":"Servicion: Residencia",
  	"Pregunta1":"1.-¿El departamento de Gestión Tecnológica y Vinculación me proporciona información del banco de proyectos de Residencias Profesionales?",
  	"Pregunta2":"2.-¿La División de Estudios Profesionales me da información de las opciones para realizar los anteproyectos de Residencias Profesionales?",
  	"Pregunta3":"3.-¿El coordinador de carrera me da información para desarrollo de anteproyectos de Residencias Profesionales?",
  	"Pregunta4":"4.-¿La División de Estudios me proporciona información acerca de los periodos para la recepción de anteproyectos de Residencias Profesionales?",
  	"Pregunta5":"5.-¿El docente asignado para revisar mi anteproyecto de residencia dictamina en el periodo establecido?",
  	"Pregunta6":"6.-¿Mi asesor interno me proporciona asesoria para el desarrollo de mi proyecto de Residencias Profesionales?",
  	"Pregunta7":"7.-¿El departamento de Gestión Tecnológica y Vinculación me entrega en tiempo las cartas de presentación y agradecimiento para la empresa?",
  	"Pregunta8":"8.-¿Mi asesor interno revisa mis informes parciales de Residencias Profesionales y me orienta para realizar las correciones y cambios?",
  	"Pregunta9":"9.-¿Mi asesor interno  me da a conocer la calificación durante el periodo establecido?"
  	 },
  	 {
  	 "id":"Servicion: Centro de Computo",
  	"Pregunta1":"1.-¿El Servicio de Cómputo tiene un horario adecuado?",
  	"Pregunta2":"2.-¿Siempre hay máquinas disponibles para realizar mi trabajo?",
  	"Pregunta3":"3.-¿Siempre tengo disponible una conexion de Internet?",
  	"Pregunta4":"4.-¿Me proporcionan atención adecuada en el servicio de Internet?",
  	"Pregunta5":"5.-¿Me proporcionan atención adecuada en caso de presentarse fallas en el equipo que se me asignó?",
  	"Pregunta6":"6.-¿Me proporcionan asesoría adecuada para resolver mis dudas sobre el uso de software?",
  	"Pregunta7":"7.-¿Me atienden en forma oportuna cuando solicito cualquier servicio?",
  	"Pregunta8":"8.-¿Me atienden en forma amable cuando solicito información?",
  	"Pregunta9":"9.-¿Mantienen una relación atenta conmigo durante toda mi estancia en las instalaciones?"
  	 },
  	  {
  	 "id":"Servicion: Servicios Escolares",
  	"Pregunta1":"1.-¿El Departamento de Servicios Escolares tiene un horario adecuado de atención?",
  	"Pregunta2":"2.-¿El tiempo de respuesta a mis solicitudes es rápido?",
  	"Pregunta3":"3.-¿El tiempo de espera para ser atendido en la ventanilla es adecuado?",
  	"Pregunta4":"4.-¿Me proporcionan atención adecuada en el servicio?",
  	"Pregunta5":"5.-¿Me proporcionan información adecuada en caso de que se la solicite?",
  	"Pregunta6":"6.-¿Me orientan adecuadamente cuando lo solicito?",
  	"Pregunta7":"7.-¿Me atienden en forma oportuna cuando solicito un servicio?",
  	"Pregunta8":"8.-¿Me atienden en forma amable cuando solicito su apoyo?",
  	"Pregunta9":"9.-¿Mantienen una relación atenta conmigo durante toda mi estancia en el departamento?"
  	 },
  	  {
  	 "id":"Servicion: Servicios Social",
  	"Pregunta1":"1.-¿La oficina de servicio social tiene un horario adecuado para realizar mis trámites?",
  	"Pregunta2":"2.-¿La oficina de servicio social me ofrece un catálogo de instituciones en donde puedo realizarlo?",
  	"Pregunta3":"3.-¿La oficina de servicio social me gestiona apoyos para desarrollar mis actividades?",
  	"Pregunta4":"4.-¿Me proporcionan atención adecuada cuando realizo mis trámites?",
  	"Pregunta5":"5.-¿Me apoyan adecuadamente en la búsqueda, en caso de no tener en donde hacerlo?",
  	"Pregunta6":"6.-¿Me proporcionan asesoría para desarrollar en forma adecuada el servicio social?",
  	"Pregunta7":"7.-¿Me atienden en forma inmediata al solicitar información?",
  	"Pregunta8":"8.-¿Me atienden en forma amable al solicitar información del servicio social?",
  	"Pregunta9":"9.-¿Matienen una relación atenta conmigo durante toda mi estancia en su oficina?"
  	 }, 
  	 {
  	 "id":"Servicion: Laboratorio correspondiente a su Carrera",
  	"Pregunta1":"1.-¿Los servicios necesarios para la operación de los equipos son suficientes y adecuados?",
  	"Pregunta2":"2.-¿	Los equipos son los suficientes y adecuados para el desarrollo de las prácticas?",
  	"Pregunta3":"3.-¿Siempre tengo disponible material necesario para mis prácticas?",
  	"Pregunta4":"4.-¿Me proporcionan atención adecuada durante el desarrollo de mi práctica?",
  	"Pregunta5":"5.-¿Me proporcionan atención adecuada en caso de presentarse fallas en el equipo que se me asignó?",
  	"Pregunta6":"6.-¿Me proporcionan asesoría adecuada para resolver mis dudas sobre el desarrollo de la práctica?",
  	"Pregunta7":"7.-¿Me atienden en forma oportuna cuando solicito cualquier servicio?",
  	"Pregunta8":"8.-¿Me atienden en forma amable cuando solicito información?",
  	"Pregunta9":"9.-¿Mantienen una relación atenta conmigo durante toda mi estancia en el laboratorio?"
  	 }];
  	 
}


