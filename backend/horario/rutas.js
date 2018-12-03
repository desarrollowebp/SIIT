
const { Router } = require('express')

const {
  horario
} = require('./modelos.js')


const horarioRouter = Router()

horarioRouter.get('/', (req, res, next) => {
  horario.find()
    .then((datosHorarioo) => res.json({ datosHorarioo }))
    .catch(next)
})

module.exports = {
  horarioRouter
}