const mongoose = require('mongoose')

const actividadesSchema =  new mongoose.Schema({

})

const maestrosExtraescolarSchema =  new mongoose.Schema({

})

const extraescolarSeleccionadaSchema =  new mongoose.Schema({

})

const extraescolarAgregadaSchema =  new mongoose.Schema({

})

module.exports = {
  actividades: mongoose.model('actividades', actividadesSchema),
  maestrosExtraescolar:  mongoose.model('extraescolargpos', maestrosExtraescolarSchema),
  extraescolarSeleccionada:  mongoose.model('extraescolarActual', extraescolarSeleccionadaSchema),
  extraescolarAgregada:  mongoose.model('extraescolarAgregada', extraescolarAgregadaSchema)
}
 