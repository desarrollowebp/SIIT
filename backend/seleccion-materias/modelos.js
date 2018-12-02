const mongoose = require('mongoose')

const semestresSchema =  new mongoose.Schema({

})

const maestrosMateriaSchema =  new mongoose.Schema({

})



module.exports = {
  semestresMateria: mongoose.model('semestres', semestresSchema),
  maestrosMateria:  mongoose.model('gruposmaestroscargados', maestrosMateriaSchema)
}
