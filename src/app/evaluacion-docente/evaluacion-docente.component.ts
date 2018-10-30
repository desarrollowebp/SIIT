import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluacion-docente',
  templateUrl: './evaluacion-docente.component.html',
  styleUrls: ['./evaluacion-docente.component.css']
})
export class EvaluacionDocenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  preguntas = [
    'Explica de manera clara los contenidos de la asignatura.:',
    'Relaciona los contenidos de la asignatura con los contenidos de otras.:',
    'Resuelve las dudas relacionadas con los contenidos de la asignatura.:',
    'Propone ejemplos o ejercicios que vinculan la asignatura con la práctica profesional.:',
    'Explica la utilidad de los contenidos teóricos y prácticos para la actividad profesional.:',
    'Cumple con los acuerdos establecidos al inicio de la asignatura.:',
    'Durante el curso establece las estrategias adecuadas necesarias para lograr el aprendizaje deseado:',
    'El programa presentado al principio de la asignatura se cubre totalmente.:',
    'Incluye experiencias de aprendizaje en lugares diferentes al aula (talleres, laboratorios, empresas, comunidad, etc.).:',
    'Utiliza para el aprendizaje las herramientas de interacción de las tecnologías actuales de la información (correo electrónico, chats, plataformas, etc.).:',
    'Organiza actividades que me permiten ejercitar mi expresión oral y escrita.:',
    'Relaciona los contenidos de la asignatura con la industria y la sociedad a nivel local, regional, nacional e internacional.:',
    'Usa ejemplos y casos relacionados con la vida real.:',
    'Adapta las actividades para atender los diferentes estilos de aprendizaje de los estudiantes.:',
    'Promueve el autodidactismo y la investigación.:',
    'Promueve actividades participativas que me permiten colaborar con mis compañeros con una actividad positiva.:',
    'Estimula la reflexión sobre la manera en que aprendes.:',
    'Se involucra en las actividades propuestas al grupo.:',
    'Presenta y expone las clases de manera organizada y estructurada.:',
    'Utiliza diversas estrategias, métodos, medios y materiales.:',
    'Muestra compromiso y entusiasmo en sus actividades docentes:',
    'Toma en cuenta las necesidades, intereses y expectativas del grupo.:',
    'Propicia el desarrollo de un ambiente de respeto y confianza.:',
    'Propicia la curiosidad y el deseo de aprender.:',
    'Reconoce los éxitos y logros en las actividades de aprendizaje.:',
    'Existe la impresión de que se toman represalias con algunos estudiantes.:',
    'Hace interesante la asignatura:',
    'Identifica los conocimientos y habilidades de los estudiantes al inicio de la asignatura o de cada unidad.:',
    'Proporciona información para realizar adecuadamente las actividades de evaluación.:',
    'Toma en cuenta las actividades realizadas y los productos como evidencias para la calificación y acreditación de la asignatura.:',
    'Considera los resultados de la evaluación (asesorías, trabajos complementarios, búsqueda de información, etc.) para realizar mejoras en el aprendizaje.:',
    'Da a conocer las calificaciones en el plazo establecido.:',
    'Da oportunidad de mejorar los resultados de la evaluación del aprendizaje.:',
    'Muestra apertura para la corrección de errores de apreciación y evaluación.:',
    'Otorga calificaciones imparciales.:',
    'Desarrolla la clase en un clima de apertura y entendimiento.:',
    'Escucha y toma en cuenta las opiniones de los estudiantes.:',
    'Muestra congruencia entre lo que dice y lo que hace.:',
    'Asiste a clases regular y puntualmente.:',
    'Fomenta la importancia de contribuir a la conservación del medio ambiente.:',
    'Promueve mantener limpias y ordenadas las instalaciones.:',
    'Es accesible y está dispuesto a brindarte ayuda académica.:',
    'Emplea las tecnologías de la información y de la comunicación como un medio que facilite el aprendizaje de los estudiantes.:',
    'Promueve el uso de diversas herramientas, particularmente las digitales, para gestionar (recabar, procesar, evaluar y usar) información.:',
    'Promueve el uso seguro, legal y ético de la información digital.:',
    'En general, pienso que es un buen docente.:',
    'Estoy satisfecha o satisfecho por mi nivel de desempeño y aprendizaje logrado gracias a la labor del docente.:',
    'Yo recomendaría a este docente a otros compañeros.:',
  ]

  maestros = [
    {nombre: 'Sofia', materia: 'Estadistica'},
    {nombre: 'Miguel', materia: 'Historia'},
    {nombre: 'Betty', materia: 'Quimica'},
    {nombre: 'Roberto', materia: 'Programacion'},
    {nombre: 'Laura', materia: 'Investigacion'},
  ]
}
