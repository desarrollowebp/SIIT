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
    'El maestro provee la informacion necesaria para la clase:',
    'Explica conceptos claramente:',
    'Proporciono las unidades a tratar al inicio del semestre:',
    'Resuelve todas las dudas que los alumnos tengan:',
    'Facilita la participacion e interaccion de todo el grupo:',
    'Busca la manera de hacer la clase interactiva:',
    'Nunca ha realizado o hecho indicacion de una falta de respeto:',
    'Trata a todo el grupo equitativamente:',
    'Busca que haya un entendimiento conciso y general:',
    'Facilita los recursos y material de apoyo:'
  ]

  maestros = [
    {nombre: 'Sofia', materia: 'Estadistica'},
    {nombre: 'Miguel', materia: 'Historia'},
    {nombre: 'Betty', materia: 'Quimica'},
    {nombre: 'Roberto', materia: 'Programacion'},
    {nombre: 'Laura', materia: 'Investigacion'},
  ]
}
