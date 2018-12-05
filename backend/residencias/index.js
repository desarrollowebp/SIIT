const {
  datosResidencias,
  respuestasResidencias
  
} = require('./modelos.js')

const {
  datosResidenciasRouter,
  respuestasResidenciasRouter

} = require('./rutas.js')

module.exports = {
  /**
   * Modelos
   */
  datosResidencias,
  respuestasResidencias
  

  /**
   * Rutas
   */
  datosResidenciasRouter,
  respuestasResidenciasRouter
  
}