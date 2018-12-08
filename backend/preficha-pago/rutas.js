const { Router } = require('express')

const {
  prefichaPago
} = require('./modelos.js')

const prefichaPagoRouter = Router()

prefichaPagoRouter.get('./', (req,res,next)=> {
	prefichaPago.find()
	.then((preficha) => res.json({ preficha }))
	.catch(next)
})
module.exports ={
	prefichaPagoRouter
}