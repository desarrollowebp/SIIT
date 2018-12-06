const { Router } = require('express')

const {
  PrefichaPago
} = require('./modelos.js')
const FichasPago = new PrefichaPago({ 
 
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