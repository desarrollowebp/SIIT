const { Router } = require('express')

const {
  actividades,
      maestrosExtraescolar,
      extraescolarSeleccionada
} = require('./modelos.js')

const actividadesRouter = Router()
const maestrosExtraescolarRouter = Router()
const extraescolarSeleccionadaRouter = Router()
/**
 * Preguntas Evaluaciones
 */
actividadesRouter.get('/', (req, res, next) => {
  actividades.find()
    .then(actividadesExtra => res.json({ actividadesExtra }))
    .catch(next)
})
maestrosExtraescolarRouter.get('/', (req, res, next) => {
  maestrosExtraescolar.find()
    .then( actividadesMaes => res.json({actividadesMaes}))
    .catch(next)
})

extraescolarSeleccionadaRouter.get('/', (req, res, next) => {
  extraescolarSeleccionada.find()
    .then( extraSel => res.json({extraSel}))
    .catch(next)
})

module.exports = {
  actividadesRouter,
  maestrosExtraescolarRouter,
  extraescolarSeleccionadaRouter
}
