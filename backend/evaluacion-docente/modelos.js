const mongoose = require('mongoose')

const preguntasEvaluacionSchema =  new mongoose.Schema({
  pregunta: String
})

const respuestasEvaluacionSchema = new mongoose.Schema({
  materia: String,
  respuestas: [{
    type: String
  }]
})

const adeudosAlumnoSchema = new mongoose.Schema({
  numeroControl: Number,
  evaluacionDocente: Boolean
})

module.exports = { 
  preguntasEvaluaciones: mongoose.model('preguntasEvaluaciones', preguntasEvaluacionSchema),
  respuestasEvaluaciones: mongoose.model('respuestasEvaluaciones', respuestasEvaluacionSchema),
  adeudosAlumnos: mongoose.model('adeudosAlumnos', adeudosAlumnoSchema)
}
