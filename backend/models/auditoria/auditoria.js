const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var preguntaSchema = new Schema({
    descripcion: String,
    fecha: Date,
    limite: Date,
    preguntas: [{ pregunta: String, categoria: String }],


});


module.exports = mongoose.model('Auditoria', preguntaSchema);