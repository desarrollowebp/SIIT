const { Router } = require('express')

const {
  gruposCargados
} = require('./modelos.js')

const gruposCargadosRouter = Router()

gruposCargadosRouter.get('/', (req, res, next) => {
  gruposCargados.find()
    .then((gruposC) => res.json({ gruposC }))
    .catch(next)
})

module.exports = {
  gruposCargadosRouter
}
