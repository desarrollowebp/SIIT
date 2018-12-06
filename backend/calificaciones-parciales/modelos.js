const mongoose = require('mongoose')



const calificacionesParcialesSchema =  new mongoose.Schema({

})



module.exports = {
  calificacionesParciales: mongoose.model('calificaciones-parciales', calificacionesParcialesSchema),
  
}
