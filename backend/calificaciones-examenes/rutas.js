//aqui va alumnos
const { Router } = require('express')

const {
  calificacionExamen
} = require('./modelos.js')


const calificacionExamenRouter = Router()

calificacionExamenRouter.get('/', (req, res, next) => {
  calificacionExamen.find()
    .then((caliexam) => res.json({ caliexam }))
    .catch(next)
})

module.exports = {
  calificacionExamenRouter
}
