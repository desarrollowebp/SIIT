const { 
  preguntasEvaluaciones,
  respuestasEvaluaciones,
  adeudosAlumnos
} = require('./modelos.js')

const {
  preguntasEvaluacionesRouter,
  respuestasEvaluacionesRouter,
  adeudosAlumnosRouter
} = require('./rutas.js')

module.exports = {
  /**
   * Modelos
   */
  preguntasEvaluaciones,
  respuestasEvaluaciones,
  adeudosAlumnos,

  /**
   * Rutas
   */
  preguntasEvaluacionesRouter,
  respuestasEvaluacionesRouter,
  adeudosAlumnosRouter
}
