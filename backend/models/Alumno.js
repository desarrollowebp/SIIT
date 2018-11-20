const mongoose = require('mongoose');

const AlumnoSchema = new mongoose.Schema({
  nombres: String,
  apellidos: String,
  numeroControl: Number
});

module.exports = mongoose.model('Alumno', AlumnoSchema);
