const { Router } = require('express')

const {
  PrefichaPago
} = require('./modelos.js')
const FichasPago = new PrefichaPago({ nombres: 'juan carlos'
  apellidos:'cabral tamayo' 
  numeroControl: '14040437'
  semestre:'1'
  periodo:'enero/julio'
  importe:'2010'
  carrera:'sistemas'
  consepto:'re-inscripcion'
  fechavencimiento:'12 enero de 2018'
  sucursalCuenta:'098909'
  referenciaAlfanumerica:'89878786'
 
}) 

const PrefichaPagoRouter = Router()

PrefichaPagoRouter.get('./', (req,res,next)=> {
	PrefichaPago.find()
	.then((fichas) => res.json({fichas}))
	.catch(next)
})
module.exports ={
	PrefichaPagoRouter
}