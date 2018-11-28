////aquí va alumno
var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var horarioSchema = new mongoose.Schema({
    // my props
    nombres: String,
    apellidos: String,
    fecha: Date,
    hora: TimeRanges,
    autorizado: String,
    biblioteca: String,
    financieros: String,
    encuesta: String    
});

const adeudosHorarioAlumnoSchema = new mongoose.Schema({
  numeroControl: Number,
  datoshorarioReinscripcion: Boolean
})
  
module.exports = {
  horarioReinscripcion: mongoose.model('horarioReinscripcion', horarioSchema),
  adeudosHorarioAlumnos: mongoose.model('adeudosHorarioAlumnos', adeudoshorarioAlumnoSchema)
}