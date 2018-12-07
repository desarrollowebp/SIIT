/*
 {
    "servicio":"biblioteca",
    "descripcion":"calidad de los servicios ofertados en la biblioteca",
    "preguntas":[
    {"pregunta":"cual es su nunero?"}
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
    servicio: {
        type: String,
        required: [true, 'el servicio es necesario']

    },
    descripcion: {
        type: String,
        required: [true, 'la descripcion es necesario']

    },
    preguntas: [{

        pregunta: String
    }]
});

let auditoriarespuestaSchema = new Schema({
    usuario: {
        type: String,
        required: [true, 'El usuario es necesario']
    },
    fecha: { type: Date, default: Date.now },
    comentario: String,
    respuestas: [{
        categoria: String,
        respuesta: [{

                _idpregunta: {
                    type: Schema.Types.ObjectId,
                    ref: 'Auditoria',
                    required: [true, 'El id de la pregunta es obligatorio ']
                },
                numero: String
            }]
            /*    idpregunta: {
                   type: String,
                   // categoria: { type: Schema.Types.ObjectId, ref: 'auditorias', required: true },
                   required: [true, 'El id de la pregunta es obligatorio ']
               },
               respuesta: {
                   type: Number,
                   enum: respuestasvalidas
               } */
    }]
});


module.exports = {
    Auditoria: mongoose.model('Auditoria', preguntaSchema),
    AuditoriaRespuestas: mongoose.model('AuditoriaRespuestas', auditoriarespuestaSchema),
}