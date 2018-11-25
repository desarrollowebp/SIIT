const { Router } = require('express')

const {
  preguntasEvaluaciones,
  respuestasEvaluaciones,
  adeudosAlumnos
} = require('./modelos.js')

const preguntasEvaluacionesRouter = Router()
const respuestasEvaluacionesRouter = Router()
const adeudosAlumnosRouter = Router()

/**
 * Preguntas Evaluaciones
 */
preguntasEvaluacionesRouter.get('/', (req, res, next) => {
  preguntasEvaluaciones.find()
    .then(preguntas => res.json({ preguntas }))
    .catch(next)
})

/**
 * Respuestas Evaluaciones
 */
respuestasEvaluacionesRouter.put('/', (req, res, next) => {
  respuestasEvaluaciones.create(req.body)
    .then(() => res.json({ success: true }))
    .catch(next)
})

/**
 * Adeudos Alumnos
 */
adeudosAlumnosRouter.post('/', (req, res, next) => {
  adeudosAlumnos.findByIdAndUpdate({ numeroControl: req.body.numeroControl }, { $set: { evaluacionDocente: true }})
    .then(() => res.json({ success: true }))
    .catch(next)
})

module.exports = {
  preguntasEvaluacionesRouter,
  respuestasEvaluacionesRouter,
  adeudosAlumnosRouter
}
