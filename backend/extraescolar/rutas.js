const { Router } = require('express')

const {
  actividades,
      maestrosExtraescolar

} = require('./modelos.js')

const actividadesRouter = Router()
const maestrosExtraescolarRouter = Router()
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
    .then( actividadesMaes => res.json({  actividadesMaes }))
    .catch(next)
})


module.exports = {
  actividadesRouter,
  maestrosExtraescolarRouter

}