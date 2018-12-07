const {
    actividades,
    maestrosExtraescolar,
    extraescolarSeleccionada,
    extraescolarAgregada

  } = require('./modelos.js')

  const {
    actividadesRouter,
    maestrosExtraescolarRouter,
    extraescolarSeleccionadaRouter,
    extraescolarAgregadaRouter

  } = require('./rutas.js')

  module.exports = {

    actividades,
    maestrosExtraescolar,
    extraescolarSeleccionada,
    extraescolarAgregada,
    /**


     * Rutas
     */
    actividadesRouter,
    maestrosExtraescolarRouter,
    extraescolarSeleccionadaRouter,
    extraescolarAgregadaRouter

  }
