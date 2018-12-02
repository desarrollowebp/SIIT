const {
  semestresMateria,maestrosMateria

} = require('./modelos.js')

const {
  semestresMateriaRouter,
  maestrosMateriaRouter

} = require('./rutas.js')

module.exports = {
  /**
   * Modelos
   */
  semestresMateria,
  maestrosMateria,

  /**
   * Rutas
   */
  semestresMateriaRouter,
  maestrosMateriaRouter

}
