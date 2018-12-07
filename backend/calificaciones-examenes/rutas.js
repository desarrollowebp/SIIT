//aqui va alumnos
const { Router } = require('express')

const {
  calificacionexamen
} = require('./modelos.js')


const calificacionexamenRouter = Router()

calificacionexamenRouter.get('/', (req, res, next) => {
  calificacionexamen.find()
    .then((caliexam) => res.json({ caliexam }))
    .catch(next)
})

module.exports = {
  calificacionexamenRouter
}
