const {
  preguntasEvaluaciones,
  respuestasEvaluaciones,
  adeudosAlumnos,
  maestrosMaterias
} = require('./modelos.js')

const {
  preguntasEvaluacionesRouter,
  respuestasEvaluacionesRouter,
  adeudosAlumnosRouter,
  maestrosMateriasRouter
} = require('./rutas.js')

module.exports = {
  /**
   * Modelos
   */
  preguntasEvaluaciones,
  respuestasEvaluaciones,
  adeudosAlumnos,
  maestrosMaterias,

  /**
   * Rutas
   */
  preguntasEvaluacionesRouter,
  respuestasEvaluacionesRouter,
  adeudosAlumnosRouter,
  maestrosMateriasRouter
}
