const mongoose = require('mongoose')

const gruposCargadosSchema = new mongoose.Schema({
  /*grupo: String,
  materia: String,
  codigo: String,
  facilitador: String,
  lunes: String,
  salonl: String,
  martes: String,
  salonma: String,
  miercoles: String,
  salonmi: String,
  jueves: String,
  salonj: String,
  viernes: String,
  salonv: String,
  sabado: String,
  salons: String*/
})
//actualizado
module.exports = {
  gruposCargados:
  mongoose.model('gruposcargados',
  gruposCargadosSchema)
}

/*
horarioreinscripcions es como se debe de llamar donde vas a hacer el insert,
module.exports = {
  gruposCargados:
  mongoose.model('horarioreinscripcions', <----aqui pones el nombre de la tabla que crearas
  gruposCargadosSchema)
}

así es como inserto cosas
db.datosreins.insert({     autorizado: 'NO',     biblioteca: 'NO',     encuesta: 'NO',     escolares:
'NO',     financieros: 'NO',     fecha: '20/11/2018',     grupo: '1M',     hora: '10:40',     nombres: 'Dalia que pez'     })
WriteResult({ "nInserted" : 1 })
>
*/
