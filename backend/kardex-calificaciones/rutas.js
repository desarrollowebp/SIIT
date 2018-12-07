
const { Router } = require('express')

const {
  kardexCalificaciones
} = require('./modelos.js')

 /*const kardex=new kardexCalificaciones({ 
    salon: 'LC22', 
     curso: 'Repeticion', 
	periodoEsc: 'AGO/DIC 2014', 
	promedioSem: '80.70', 
	creditosAprob: '26', 
	peridoAritmetico: '68.90', 
    creditosCursados: '26'
	 }
)

//*/

const kardexCalificacionesRouter = Router()

kardexCalificacionesRouter.get('/', (req, res, next) => {
  kardexCalificaciones.find()
    .then((kardex) => res.json({ kardex }))
    .catch(next)
})

module.exports = {
  kardexCalificacionesRouter
}