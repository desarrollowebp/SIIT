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
  sucursalCuenta:Number,
  referenciaAlfanumerica:Number,
  

});

module.exports = mongoose.model('PrefichaPago', AlumnoSchema);