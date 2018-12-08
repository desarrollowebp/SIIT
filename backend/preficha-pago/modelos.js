const mongoose = require('mongoose')

const prefichaPagoSchema = new mongoose.Schema({
  /*nombres: String,
  apellidos: String,
  numeroControl: String,
  semestre:String,
  periodo:String,
  importe:String,
  carrera:String,
  consepto:String,
  fechavencimiento:String,
  sucursalCuenta:String,
  referenciaAlfanumerica:String*/
})

module.exports = {
  prefichaPago:
  mongoose.model('pagos', 
  prefichaPagoSchema)
}

//db.pagos.insert({nombres: 'juan', apellidos: 'cabral', numeroControl: '14040428', semestre: '3', periodo: 'enero-febrero', importe: '1550', carrera: 'sistemas', consepto: 'pago de incripcion', fechavencimiento: 'diciembre', sucursalCuenta: '70000', referenciaAlfanumerica: 'P14040428'})