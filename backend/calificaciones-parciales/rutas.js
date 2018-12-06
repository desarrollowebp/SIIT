const { Router } = require('express')

const {
  calificacionesParciales

} = require('./modelos.js')

const calificacionesParcialesRouter = Router ()

calificacionesParcialesRouter.get('/', (req, res, next) => {
  calificacionesParciales.find()
    .then( materia => res.json({  materia }))
    .catch(next)
})


module.exports = {
  calificacionesParcialesRouter

}
