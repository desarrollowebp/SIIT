const { Router } = require('express')

const {
  folio,
  respuestasEvaluaciones,

} = require('./modelos.js')

const datosEvaluacionesRouter = Router()
const respuestasEvaluacionesRouter = Router()

/**
 * Preguntas Evaluaciones
 */
datosResidenciaRouter.get('/', (req, res, next) => {
  datosResidencia.find()
    .then(datos => res.json({ datos }))
    .catch(next)
})

/**
 * Respuestas Evaluaciones
 */
respuestasResidenciaRouter.put('/', (req, res, next) => {
  respuestasResidencia.create(req.body)
    .then(() => res.json({ success: true }))
    .catch(next)
})



module.exports = {
  datosResidenciaRouter,
  respuestasResidenciaRouter
  
}