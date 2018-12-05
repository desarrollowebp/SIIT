const mongoose = require('mongoose')

const horarioSchema = new mongoose.Schema({

})


module.exports = {
  horario:
   mongoose.model('horario',
   horarioSchema)
 
}