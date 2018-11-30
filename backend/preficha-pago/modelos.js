const mongoose = require('mongoose');

const PrefichaPagoSchema = new mongoose.Schema({

  nombres: String,
  apellidos: String,
  numeroControl: Number,
  semestre:Number,
  periodo:Number,
  importe:Number,
  carrera:String,
  consepto:String,
  fechavencimiento:Number,
  sucursal-cuenta:Number,
  referencia-alfanumerica:Number,
  fechavencimiento:Number,

});

module.exports = mongoose.model('Alumno', AlumnoSchema);
