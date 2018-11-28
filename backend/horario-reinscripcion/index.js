  ////aqui va lo de app
  
  const {
    horarioReinscripcion,
    adeudosHorarioAlumnos
  } = require('./modelos.js')
  
  const {
    horarioReinscripcionRouter,
    adeudosHorarioAlumnosRouter
  } = require('./rutas.js')
  
  module.exports = {
    /**
     * Modelos
     */
    horarioReinscripcion,
    adeudosHorarioAlumnos,
  
    /**
     * Rutas
     */
    horarioReinscripcionRouter,
    adeudosHorarioAlumnosRouter
  }
