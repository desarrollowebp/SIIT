var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var auditoriarespuestaSchema = new Schema({
    idusuario: { type: String, required: [true, 'el usuario'] },
    fecha: { type: Date, required: [true, 'la fecha es necesaria'] },
    respuestas: {
        pregunta: {
            idpregunta: {
                type: Schema.Types.ObjectId,
                ref: 'Auditoria',
                required: [true, 'El id de la pregunta es obligatorio ']
            },
            respuesta: Number
        }
    }
});

module.exports = mongoose.model('AuditoriaRespuestas', auditoriarespuestaSchema);