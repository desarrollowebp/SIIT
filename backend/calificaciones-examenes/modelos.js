const mongoose = require('mongoose')

const calificacionExamenSchema =  new mongoose.Schema({
 
    facilitador: String,
    materia: String,
    calificacion: Number,
    tipo: String


  
})


module.exports = {
  calificacionExamen: mongoose.model('calificacionExamen', calificacionExamenSchema)
}
