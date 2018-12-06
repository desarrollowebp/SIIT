const {
    actividades,maestrosExtraescolar,extraescolarSeleccionada
  
  } = require('./modelos.js')
  
  const {
    actividadesRouter,
    maestrosExtraescolarRouter,
    extraescolarSeleccionadaRouter
  
  } = require('./rutas.js')
  
  module.exports = {
    
    actividades,
    maestrosExtraescolar,
    extraescolarSeleccionada,
    /**
     * Rutas
     */
    actividadesRouter,
    maestrosExtraescolarRouter,
    extraescolarSeleccionadaRouter,
  
  }
  