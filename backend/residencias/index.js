const {
  datosResidencia,
  respuestasResidencia,
  
} = require('./modelos.js')

const {
  datosResidenciasRouter,
  respuestasEvaluacionesRouter,

} = require('./rutas.js')

module.exports = {
  /**
   * Modelos
   */
  datosEvaluaciones,
  respuestasEvaluaciones,
  

  /**
   * Rutas
   */
  datosEvaluacionesRouter,
  respuestasEvaluacionesRouter
}