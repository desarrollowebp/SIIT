const { Router } = require('express')

const {
  horarioReinscripcion
} = require('./modelos.js')

const horarioReinscripcionRouter = Router()

horarioReinscripcionRouter.get('/', (req, res, next) => {
  horarioReinscripcion.find()
    .then((datosHorario) => res.json({ datosHorario }))
    .catch(next)
})

module.exports = {
  horarioReinscripcionRouter
}
