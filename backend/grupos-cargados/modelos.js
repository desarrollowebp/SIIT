<<<<<<< HEAD

=======
>>>>>>> bc6ac46295d95f9da42364f468ea1cf56d139101
const mongoose = require('mongoose')

const gruposCargadosSchema = new mongoose.Schema({
  grupo: String,
  materia: String,
  codigo: String,
  facilitador: String,
  lunes: String,
  salonl: String,
  martes: String,
  salonma: String,
  miercoles: String,
  salonmi: String,
  jueves: String,
  salonj: String,
  viernes: String,
  salonv: String,
  sabado: String,
  salons: String
})

module.exports = {
  gruposCargados: mongoose.model('gruposCargados', gruposCargadosSchema)
}