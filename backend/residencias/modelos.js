const mongoose = require('mongoose')

const datosResidenciasSchema =  new mongoose.Schema({
  datos: String
})

const respuestasResidenciasSchema = new mongoose.Schema({
  folio: String,
  respuestas: [{
    type: String
  }]
})

const residenteAlumnoSchema = new mongoose.Schema({
  numeroControl: Number,
  datosResidencias: String,
})

module.exports = {
  datosResidencias: mongoose.model('preguntasEvaluaciones', datosResidenciasSchema),
  respuestasResidencias: mongoose.model('respuestasEvaluaciones', respuestasResidenciasSchema),
  residenteAlumno: mongoose.model('adeudosAlumnos', adeudosAlumnosSchema)
}