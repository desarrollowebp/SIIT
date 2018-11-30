//aqui va alumnos
const { Router } = require('express')

const {
    horarioReinscripcion,
   // adeudosHorarioAlumnos
  } = require('./modelos.js')


//const adeudosHorarioAlumnosRouter = Router()

const horaDatos=new horarioReinscripcion({ grupo: '1M',
nombres: 'Alejandro Marrufo Quintana',
fecha: '20/11/2018',
hora: '10:40',
autorizado: 'Si',
biblioteca: 'Si',
financieros: 'Si',
encuesta: 'Si' }
)

const horarioReinscripcionRouter = Router()

/**
 * datos de tabla horario
 */
horarioReinscripcionRouter.get('/', (req, res, next) => {
      response.find();//quite ´index´
      horarioReinscripcion.find()
      .then((datos) => res.json({ datos }))
    .catch(next)
      /*
      .then(datos => res.json({ datos }))
      .catch(next)*/
  });
  module.exports = {
    horarioReinscripcionRouter
  }
  ////tengo que cambiar los nombres de el front de la tabla para que concuerde
