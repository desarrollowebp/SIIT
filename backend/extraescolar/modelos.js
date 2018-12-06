const mongoose = require('mongoose')

const actividadesSchema =  new mongoose.Schema({

})

const maestrosExtraescolarSchema =  new mongoose.Schema({

})



module.exports = {
  actividades: mongoose.model('actividades', actividadesSchema),
  maestrosExtraescolar:  mongoose.model('extraescolargpos', maestrosExtraescolarSchema)
}
