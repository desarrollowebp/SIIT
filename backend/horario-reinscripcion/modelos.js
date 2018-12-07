////aquí va alumno
const mongoose = require('mongoose')

const horarioReinscripcionSchema = new mongoose.Schema({

})

module.exports = {
  horarioReinscripcion:
  mongoose.model('datosreins',
  horarioReinscripcionSchema)
}

/*
db.datosreins.insert({     autorizado: 'NO',     biblioteca: 'NO',     encuesta: 'NO',     escolares:
'NO',     financieros: 'NO',     fecha: '20/11/2018',     grupo: '1M',     hora: '10:40',     nombres: 'Dalia que pez'     })
WriteResult({ "nInserted" : 1 })
>
*/
