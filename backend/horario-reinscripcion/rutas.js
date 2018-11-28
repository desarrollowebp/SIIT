//aqui va alumnos
const { Router } = require('express')

const {
    horarioReinscripcion,
    adeudosHorarioAlumnos
  } = require('./modelos.js')

  
const horarioReinscripcionRouter = Router()
const adeudosHorarioAlumnosRouter = Router()

/**
 * datos de tabla horario 
 */
horarioReinscripcionRouter.get('/', (req, res, next) => {
    horarioReinscripcion.find()
      .then(datos => res.json({ datos }))
      .catch(next)
  })