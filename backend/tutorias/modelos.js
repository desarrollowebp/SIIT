const mongoose = require('mongoose');
const { Schema } = mongoose;

const informacionTutoriasSchema = new Schema({
    tutor: {type: String, required: true},
    nombretutor:{type: String, required: true},
    actividad: {type: String, required: true},
    check: {type: Boolean, required: true},
    avance: {type: String, required: true}
});

module.exports = {
    informacionTutorias: mongoose.model('informacionTutorias', informacionTutoriasSchema)
}
