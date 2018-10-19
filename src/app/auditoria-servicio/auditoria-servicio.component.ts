import { Component, OnInit } from '@angular/core';
import {tpregunta} from  './tipos/preguntas';

@Component({
  selector: 'app-auditoria-servicio',
  templateUrl: './auditoria-servicio.component.html',
  styleUrls: ['./auditoria-servicio.component.css']
})
export class AuditoriaServicioComponent {
	

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
  	"Pregunta1":"1.-�Tiene un Horario de consulta?",
  	"Pregunta2":"2.-�La informacion con la que cuenta me apoya en las asignaturas que curso?",
  	"Pregunta3":"3.-�Siempre encuentro por lo menos un ejemplar disponible de la biografia se�alada en las asignaturas?",
  	"Pregunta4":"4.-�La bibliografia de la que se dispone es actualizada?",
  	"Pregunta5":"5.-�Se me proporciona atencion adecuada en caso de buscar determinado libro?",
  	"Pregunta6":"6.-�Me orientan adecuadamente para encontrar en caso de carencia, libros equivalentes al requerido?",
  	"Pregunta7":"7.-�Tienen disposicion para atenderme cuando solicito apoyo?",
  	"Pregunta8":"8.-�Me atienden en forma amable cuando solicito su apoyo?",
  	"Pregunta9":"9.-�Mantienen una relacion atenta conmigo durante mi estancia?"
  	  },
  	 {
  	 "id":"Servicion: Coordinacion de Carreras",
  	"Pregunta1":"1.-�Tiene un Horario de atencion?",
  	"Pregunta2":"2.-�Me proporciona informacion necesaria para el manejo de mi reticula de carrera?",
  	"Pregunta3":"3.-�Me da orientacion adecuada cuando requiero realizar tramites en la institucion?",
  	"Pregunta4":"4.-�Me orienta acerca de desarrollo del plan de estudios de la carrera?",
  	"Pregunta5":"5.-�Me da informaci�n necesaria para realizar las Residencias Profesionales?",
  	"Pregunta6":"6.-�Me proporciona informaci�n sobre el proceso para la reinscripci�n de estudiantes?",
  	"Pregunta7":"7.-�Me orientan para resolver situaciones de tipo acad�mico?",
  	"Pregunta8":"8.-�	Me dan la orientaci�n necesaria para la realizaci�n de tr�mites de titulaci�n?",
  	"Pregunta9":"9.-�Me proporciona informaci�n sobre el calendario escolar?"
  	 },
  	 {
  	 "id":"Servicion: Recursos Financieros",
  	"Pregunta1":"1.-�Tiene un horario adecuado para realizar mis tr�mites?",
  	"Pregunta2":"2.-�Me proporcionan una lista actualizada de los costos de los diferentes tr�mites?",
  	"Pregunta3":"3.-�El tiempo de espera para pagar en caja de recursos financieros es aceptable?",
  	"Pregunta4":"4.-�El personal de Recursos Financieros atiende las peticiones que le hago?",
  	"Pregunta5":"5.-�El personal de Recursos Financieros siempre me cobra el concepto correcto?",
  	"Pregunta6":"6.-�Me proporcionan asesor�a adecuada cuando desconozco qu� o cu�nto pagar?",
  	"Pregunta7":"7.-�Me atienden en forma oportuna cuando solicito un servicio?",
  	"Pregunta8":"8.-�Me atienden en forma amable cuando solicito un servicio?",
  	"Pregunta9":"9.-�Mantienen una relaci�n atenta conmigo durante todo el tiempo en que me otorga el servicio?"
  	 },

  	 {
  	 "id":"Servicion: Residencia",
  	"Pregunta1":"1.-�El departamento de Gesti�n Tecnol�gica y Vinculaci�n me proporciona informaci�n del banco de proyectos de Residencias Profesionales?",
  	"Pregunta2":"2.-�La Divisi�n de Estudios Profesionales me da informaci�n de las opciones para realizar los anteproyectos de Residencias Profesionales?",
  	"Pregunta3":"3.-�El coordinador de carrera me da informaci�n para desarrollo de anteproyectos de Residencias Profesionales?",
  	"Pregunta4":"4.-�La Divisi�n de Estudios me proporciona informaci�n acerca de los periodos para la recepci�n de anteproyectos de Residencias Profesionales?",
  	"Pregunta5":"5.-�El docente asignado para revisar mi anteproyecto de residencia dictamina en el periodo establecido?",
  	"Pregunta6":"6.-�Mi asesor interno me proporciona asesoria para el desarrollo de mi proyecto de Residencias Profesionales?",
  	"Pregunta7":"7.-�El departamento de Gesti�n Tecnol�gica y Vinculaci�n me entrega en tiempo las cartas de presentaci�n y agradecimiento para la empresa?",
  	"Pregunta8":"8.-�Mi asesor interno revisa mis informes parciales de Residencias Profesionales y me orienta para realizar las correciones y cambios?",
  	"Pregunta9":"9.-�Mi asesor interno  me da a conocer la calificaci�n durante el periodo establecido?"
  	 },
  	 {
  	 "id":"Servicion: Centro de Computo",
  	"Pregunta1":"1.-�El Servicio de C�mputo tiene un horario adecuado?",
  	"Pregunta2":"2.-�Siempre hay m�quinas disponibles para realizar mi trabajo?",
  	"Pregunta3":"3.-�Siempre tengo disponible una conexion de Internet?",
  	"Pregunta4":"4.-�Me proporcionan atenci�n adecuada en el servicio de Internet?",
  	"Pregunta5":"5.-�Me proporcionan atenci�n adecuada en caso de presentarse fallas en el equipo que se me asign�?",
  	"Pregunta6":"6.-�Me proporcionan asesor�a adecuada para resolver mis dudas sobre el uso de software?",
  	"Pregunta7":"7.-�Me atienden en forma oportuna cuando solicito cualquier servicio?",
  	"Pregunta8":"8.-�Me atienden en forma amable cuando solicito informaci�n?",
  	"Pregunta9":"9.-�Mantienen una relaci�n atenta conmigo durante toda mi estancia en las instalaciones?"
  	 },
  	  {
  	 "id":"Servicion: Servicios Escolares",
  	"Pregunta1":"1.-�El Departamento de Servicios Escolares tiene un horario adecuado de atenci�n?",
  	"Pregunta2":"2.-�El tiempo de respuesta a mis solicitudes es r�pido?",
  	"Pregunta3":"3.-�El tiempo de espera para ser atendido en la ventanilla es adecuado?",
  	"Pregunta4":"4.-�Me proporcionan atenci�n adecuada en el servicio?",
  	"Pregunta5":"5.-�Me proporcionan informaci�n adecuada en caso de que se la solicite?",
  	"Pregunta6":"6.-�Me orientan adecuadamente cuando lo solicito?",
  	"Pregunta7":"7.-�Me atienden en forma oportuna cuando solicito un servicio?",
  	"Pregunta8":"8.-�Me atienden en forma amable cuando solicito su apoyo?",
  	"Pregunta9":"9.-�Mantienen una relaci�n atenta conmigo durante toda mi estancia en el departamento?"
  	 },
  	  {
  	 "id":"Servicion: Servicios Social",
  	"Pregunta1":"1.-�La oficina de servicio social tiene un horario adecuado para realizar mis tr�mites?",
  	"Pregunta2":"2.-�La oficina de servicio social me ofrece un cat�logo de instituciones en donde puedo realizarlo?",
  	"Pregunta3":"3.-�La oficina de servicio social me gestiona apoyos para desarrollar mis actividades?",
  	"Pregunta4":"4.-�Me proporcionan atenci�n adecuada cuando realizo mis tr�mites?",
  	"Pregunta5":"5.-�Me apoyan adecuadamente en la b�squeda, en caso de no tener en donde hacerlo?",
  	"Pregunta6":"6.-�Me proporcionan asesor�a para desarrollar en forma adecuada el servicio social?",
  	"Pregunta7":"7.-�Me atienden en forma inmediata al solicitar informaci�n?",
  	"Pregunta8":"8.-�Me atienden en forma amable al solicitar informaci�n del servicio social?",
  	"Pregunta9":"9.-�Matienen una relaci�n atenta conmigo durante toda mi estancia en su oficina?"
  	 }, 
  	 {
  	 "id":"Servicion: Laboratorio correspondiente a su Carrera",
  	"Pregunta1":"1.-�Los servicios necesarios para la operaci�n de los equipos son suficientes y adecuados?",
  	"Pregunta2":"2.-�	Los equipos son los suficientes y adecuados para el desarrollo de las pr�cticas?",
  	"Pregunta3":"3.-�Siempre tengo disponible material necesario para mis pr�cticas?",
  	"Pregunta4":"4.-�Me proporcionan atenci�n adecuada durante el desarrollo de mi pr�ctica?",
  	"Pregunta5":"5.-�Me proporcionan atenci�n adecuada en caso de presentarse fallas en el equipo que se me asign�?",
  	"Pregunta6":"6.-�Me proporcionan asesor�a adecuada para resolver mis dudas sobre el desarrollo de la pr�ctica?",
  	"Pregunta7":"7.-�Me atienden en forma oportuna cuando solicito cualquier servicio?",
  	"Pregunta8":"8.-�Me atienden en forma amable cuando solicito informaci�n?",
  	"Pregunta9":"9.-�Mantienen una relaci�n atenta conmigo durante toda mi estancia en el laboratorio?"
  	 }];
  	 
}


