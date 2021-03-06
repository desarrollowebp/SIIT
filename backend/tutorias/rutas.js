const { Router } = require('express')

const {
    informacionTutorias
  } = require('./modelos.js')
  
  const informacionTutoriasRouter = Router()

  informacionTutoriasRouter.get('/', (req, res, next) => {  
    informacionTutorias.find()
      .then(infotuto => res.json({ infotuto }))
      .catch(next)
  })  

  module.exports = {
    informacionTutoriasRouter
    }
