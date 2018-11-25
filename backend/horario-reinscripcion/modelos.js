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

module.exports =
 mongoose.model('HorarioReinscripcion',
  horarioSchema);
  
