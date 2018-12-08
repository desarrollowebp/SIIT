const mongoose = require('mongoose');


const informacionTutoriasSchema = new mongoose.Schema({
    dato: {type: String, required: true},
    tutor:{type: String, required: true},
    act1: {type: String, required: true},
    checkbox1: {type: Boolean, required: true},
    act2: {type: String, required: true},
    checkbox2: {type: Boolean, required: true},
    act3: {type: String, required: true},
    checkbox3: {type: Boolean, required: true},
    act4: {type: String, required: true},
    checkbox4: {type: Boolean, required: true},
    act5: {type: String, required: true},
    checkbox5: {type: Boolean, required: true},
    act6: {type: String, required: true},
    checkbox6: {type: Boolean, required: true},
    act7: {type: String, required: true},
    checkbox7: {type: Boolean, required: true},
    act8: {type: String, required: true},
    checkbox8: {type: Boolean, required: true},
    act9: {type: String, required: true},
    checkbox9: {type: Boolean, required: true},
    act10: {type: String, required: true},
    checkbox10: {type: Boolean, required: true},
    act11: {type: String, required: true},
    checkbox11: {type: Boolean, required: true},
    act12: {type: String, required: true},
    checkbox12: {type: Boolean, required: true},
    act13: {type: String, required: true},
    checkbox13: {type: Boolean, required: true},
    act14: {type: String, required: true},
    checkbox14: {type: Boolean, required: true},
    act15: {type: String, required: true},
    checkbox15: {type: Boolean, required: true},
    act16: {type: String, required: true},
    checkbox16: {type: Boolean, required: true},
    act17: {type: String, required: true},
    checkbox17: {type: Boolean, required: true},
    act18: {type: String, required: true},
    checkbox18: {type: Boolean, required: true},
    act19: {type: String, required: true},
    checkbox19: {type: Boolean, required: true},
    act20: {type: String, required: true},
    checkbox20: {type: Boolean, required: true},
    avance: {type: String, required: true}
});

module.exports = {
    informacionTutorias: mongoose.model('informacionTutorias', informacionTutoriasSchema)
}
