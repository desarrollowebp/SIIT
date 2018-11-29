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
    response.render('index'); 
  /*
    horarioReinscripcion.find()
      .then(datos => res.json({ datos }))
      .catch(next)*/
  });

  ////tengo que cambiar los nombres de el front de la tabla para que concuerde