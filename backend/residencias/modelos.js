const mongoose = require('mongoose')

const datosResidenciaSchema =  new mongoose.Schema({
  datos: String
})

const respuestasResidenciaSchema = new mongoose.Schema({
  folio: String,
  numeroControl: [{
    type: String
  }]
})

const adeudosAlumnosSchema = new mongoose.Schema({
  numeroControl: Number,
  nombreAlumno: String
})

module.exports = {
  preguntasResidencias: mongoose.model('preguntasEvaluaciones', preguntasEvaluacionesSchema),
  respuestasResidencia: mongoose.model('respuestasEvaluaciones', respuestasEvaluacionesSchema)
  
}