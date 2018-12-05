const mongoose = require('mongoose')

<<<<<<< HEAD
const datosResidenciasSchema =  new mongoose.Schema({
  datos: String
})

const respuestasResidenciasSchema = new mongoose.Schema({
  folio: String,
  respuestas: [{
=======
const datosResidenciaSchema =  new mongoose.Schema({
  datos: String
})

const respuestasResidenciaSchema = new mongoose.Schema({
  folio: String,
  numeroControl: [{
>>>>>>> 03403cc655d7ea17f03749234b42fc02b10a79ef
    type: String
  }]
})

<<<<<<< HEAD
const residenteAlumnoSchema = new mongoose.Schema({
  numeroControl: Number,
  datosResidencias: String,
})

module.exports = {
  datosResidencias: mongoose.model('preguntasResidencias', datosResidenciasSchema),
  respuestasResidencias: mongoose.model('respuestasResidencias', respuestasResidenciasSchema),
  residenteAlumno: mongoose.model('residenteAlumno', adeudosAlumnosSchema)
=======
const adeudosAlumnosSchema = new mongoose.Schema({
  numeroControl: Number,
  nombreAlumno: String
})

module.exports = {
  preguntasResidencias: mongoose.model('datosResidencias', preguntasEvaluacionesSchema),
  respuestasResidencia: mongoose.model('respuestasResidencias', respuestasEvaluacionesSchema)
  
>>>>>>> 03403cc655d7ea17f03749234b42fc02b10a79ef
}