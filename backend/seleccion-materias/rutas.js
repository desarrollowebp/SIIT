const { Router } = require('express')

const {
  semestresMateria,
      maestrosMateria

} = require('./modelos.js')

const semestresMateriaRouter = Router()
const maestrosMateriaRouter = Router()
/**
 * Preguntas Evaluaciones
 */
semestresMateriaRouter.get('/', (req, res, next) => {
  semestresMateria.find()
    .then(materiasSem => res.json({ materiasSem }))
    .catch(next)
})
maestrosMateriaRouter.get('/', (req, res, next) => {
  maestrosMateria.find()
    .then( materiasMaes => res.json({  materiasMaes }))
    .catch(next)
})
/**
 * Respuestas Evaluaciones
 */

/**
 * Adeudos Alumnos
 */


module.exports = {
  semestresMateriaRouter,
  maestrosMateriaRouter

}
