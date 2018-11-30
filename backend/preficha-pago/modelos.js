const mongoose = require('mongoose');

const PrefichaPagoSchema = new mongoose.Schema({
  nombres: String,
  apellidos: String,
  numeroControl: Number
});

module.exports = mongoose.model('Alumno', AlumnoSchema);
