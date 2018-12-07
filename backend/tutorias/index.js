/*const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express(); 

const { mongoose } = require('./database');

Configuracion
app.set('port',process.env.PORT "si existe un puerto dado por el sistema operativo tomalo"  || 3000);

Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors("localhost:4200"));

Rutas
app.use('/api/tutorias',require('./routes/tutorias.rutas'));

Inicia el servidor
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
}); */
const { 
    informacionTutorias
  } = require('./modelos.js')

  const {
    informacionTutoriasRouter
  } = require('./rutas.js')
  
  module.exports = {
    /**
     * Modelos
     */
    informacionTutorias,
  
    /**
     * Rutas
     */
    informacionTutoriasRouter
  }  