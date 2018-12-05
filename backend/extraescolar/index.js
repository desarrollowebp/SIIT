const {
    actividades,maestrosExtraescolar
  
  } = require('./modelos.js')
  
  const {
    actividadesRouter,
    maestrosExtraescolarRouter
  
  } = require('./rutas.js')
  
  module.exports = {
    
    actividades,
    maestrosExtraescolar,
  
    /**
     * Rutas
     */
    actividadesRouter,
    maestrosExtraescolarRouter
  
  }
  