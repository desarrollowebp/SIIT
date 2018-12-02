/*
 {
    "nombre":"biblioteca",
    "descripcion":"calidad de los servicios ofertados en la biblioteca",
    "preguntas":[
    {"pregunta":"cual es su nuero?"}
    ]
    } 
//formato json para enviar las preguntas
{
	"usuario":"67878",
    "respuestas":[
    	{
    	"idpregunta":"1231",
    	"respuesta":"5"
    	}]
	
	
}
*/

// descripcion serian la seccion a la que pertence esas preguntas
//     timestamps: true  es para agregar automaticamente los campos fecha de creacion y actualizacion

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let respuestasvalidas = {
    values: [1, 2, 3, 4, 5],
    message: '{VALUE} no es una respuesta valida'
};


let preguntaSchema = new Schema({
    nombre: {
        type: String
    },
    descripcion: {
        type: String
    },
    preguntas: [{

        pregunta: { type: String }
    }]
});

let auditoriarespuestaSchema = new Schema({
    usuario: {
        // categoria: { type: Schema.Types.ObjectId, ref: 'usuarios', required: true },
        type: String,
        unique: true,
        required: [true, 'El usuario es necesario']
    },
    fecha: { type: Date, default: Date.now },
    respuestas: [{
        idpregunta: {
            type: String,
            // categoria: { type: Schema.Types.ObjectId, ref: 'auditorias', required: true },
            required: [true, 'El id de la pregunta es obligatorio ']
        },
        respuesta: {
            type: Number,
            enum: respuestasvalidas
        }
    }]
});


module.exports = {
    Auditoria: mongoose.model('Auditoria', preguntaSchema),
    AuditoriaRespuestas: mongoose.model('AuditoriaRespuestas', auditoriarespuestaSchema),
}