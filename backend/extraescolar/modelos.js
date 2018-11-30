const mongoose = require('mongoose')

const extraescolarSchema =  new mongoose.Schema({
  periodo: Number,
  grupo: Number,
  promotor: String,
  hInicial: TimeRanges,
  hFinal: TimeRanges,
  dias: String,
  lugares: Number
})

module.exports = {
  extraescolar: mongoose.model('extraescolar', extraescolarSchema)
}
