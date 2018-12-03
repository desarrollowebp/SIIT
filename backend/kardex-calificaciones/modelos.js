
const mongoose = require('mongoose')

const kardexCalificacionsSchema = new mongoose.Schema({
  salon: String,
  curso: String,
  periodoEsc: String,
  promedioSem: String,
  creditosAprob: String,
  promedioAritmetico: String,
  creditosCursados: String

})

module.exports = {
  kardexCalificaciones: mongoose.model('kardexCalificaciones', kardexCalificacionesSchema)
}