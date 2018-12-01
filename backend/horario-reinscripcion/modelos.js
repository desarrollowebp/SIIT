////aquí va alumno
const mongoose = require('mongoose')


const horarioSchema = new mongoose.Schema({
    nombres: String,
    fecha: String,
    hora: String,
    autorizado: String,
    biblioteca: String,
    financieros: String,
    encuesta: String
})
/*
const adeudosHorarioAlumnoSchema = new mongoose.Schema({
  numeroControl: Number,
  datoshorarioReinscripcion: Boolean
}) */

module.exports = {
  horarioReinscripcion: mongoose.model('horarioReinscripcion', horarioSchema)
  //adeudosHorarioAlumnos: mongoose.model('adeudosHorarioAlumnos', adeudoshorarioAlumnoSchema)
}
