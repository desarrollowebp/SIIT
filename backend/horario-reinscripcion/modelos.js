////aquí va alumno
const mongoose = require('mongoose')

const horarioReinscripcionSchema = new mongoose.Schema({

})

module.exports = {
  horarioReinscripcion:
  mongoose.model('horarioreinscripcions',
  horarioReinscripcionSchema)
}
