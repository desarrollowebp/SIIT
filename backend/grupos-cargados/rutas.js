//prueba para subirlo x2

const { Router } = require('express')

const {
  gruposCargados
} = require('./modelos.js')

const miGrupo=new gruposCargados({}
)

const gruposCargadosRouter = Router()

gruposCargadosRouter.get('/', (req, res, next) => {
  gruposCargados.find()
    .then((grupos) => res.json({ grupos }))
    .catch(next)
})

module.exports = {
  gruposCargadosRouter
}