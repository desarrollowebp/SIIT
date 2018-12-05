////aquí va alumno
const mongoose = require('mongoose')

const horarioReinscripcionSchema = new mongoose.Schema({

})
/*
const adeudosHorarioAlumnoSchema = new mongoose.Schema({
  numeroControl: Number,
  datoshorarioReinscripcion: Boolean
}) */

module.exports = {
  horarioReinscripcion:
   mongoose.model('horarioreinscripcion',
   horarioReinscripcionSchema)
  //adeudosHorarioAlumnos: mongoose.model('adeudosHorarioAlumnos', adeudoshorarioAlumnoSchema)
}
// db.horarioreinscripcion.save({ grupo: '1M', nombres: 'Alejandro Marrufo Quintana', fecha: '20/11/2018', hora: '10:40', autorizado: 'Si', biblioteca: 'Si', financieros: 'Si', encuesta: 'Si'})
