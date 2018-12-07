const { Router } = require('express')

const {
  prefichaPago
} = require('./modelos.js')

const PrefichaPagoRouter = Router()

PrefichaPagoRouter.get('./', (req,res,next)=> {
	prefichaPago.find()
	.then((preficha) => res.json({ preficha }))
	.catch(next)
})
module.exports ={
	PrefichaPagoRouter
}