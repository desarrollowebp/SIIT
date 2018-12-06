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

<<<<<<< HEAD
module.exports = { 
  preguntasEvaluaciones: mongoose.model('preguntasEvaluaciones', preguntasEvaluacionSchema),
  respuestasEvaluaciones: mongoose.model('respuestasEvaluaciones', respuestasEvaluacionSchema),
  adeudosAlumnos: mongoose.model('adeudosAlumnos', adeudosAlumnoSchema)
=======
module.exports = {
  preguntasEvaluaciones: mongoose.model('preguntasEvaluaciones', preguntasEvaluacionesSchema),
  respuestasEvaluaciones: mongoose.model('respuestasEvaluaciones', respuestasEvaluacionesSchema),
  adeudosAlumnos: mongoose.model('adeudosAlumnos', adeudosAlumnosSchema)
>>>>>>> 9dca04f980990f3342cc8a3d80703e4ce0a2db88
}
