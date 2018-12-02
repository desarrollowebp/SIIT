const mongoose = require('mongoose')

const preguntasEvaluacionesSchema =  new mongoose.Schema({
  pregunta: String
})

const respuestasEvaluacionesSchema = new mongoose.Schema({
  materia: String,
  respuestas: [{
    type: String
  }]
})

const adeudosAlumnosSchema = new mongoose.Schema({
  numeroControl: Number,
  evaluacionDocente: Boolean
})

module.exports = {
  preguntasEvaluaciones: mongoose.model('preguntasEvaluaciones', preguntasEvaluacionesSchema),
  respuestasEvaluaciones: mongoose.model('respuestasEvaluaciones', respuestasEvaluacionesSchema),
  adeudosAlumnos: mongoose.model('adeudosAlumnos', adeudosAlumnosSchema)
}
