require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/siit', { useNewUrlParser: true })

const alumnosRouter = require('./routes/alumnos.js')
const {
    preguntasEvaluacionesRouter,
    respuestasEvaluacionesRouter,
    adeudosAlumnosRouter
} = require('./evaluacion-docente')

const {
    gruposCargadosRouter
} = require('./grupos-cargados')

///
const {
  horarioReinscripcionRouter
} = require('./horario-reinscripcion')
///
const {
  semestresMateriaRouter,
    maestrosMateriaRouter
} = require('./seleccion-materias')
///
const {
    actividadesRouter,
      maestrosExtraescolarRouter
  } = require('./extraescolar')


const app = express();

app.use(cors())
app.use(bodyParser.json())

app.use('/alumnos', alumnosRouter);

/**
 * Evaluacion docente
 */
app.use('/preguntas-evaluaciones', preguntasEvaluacionesRouter)
app.use('/respuestas-evaluaciones', respuestasEvaluacionesRouter)
app.use('/adeudos-alumnos', adeudosAlumnosRouter)
app.use('/seleccion-materias', semestresMateriaRouter )
app.use('/seleccion-materias-maestros',  maestrosMateriaRouter)
app.use('/extraescolar',  actividadesRouter)
app.use('/extraescolar-maestros',  maestrosExtraescolarRouter)
app.use('/grupos-cargados',  gruposCargadosRouter)
/**************
 *   Auditoria servicios
 */
app.use(require('./auditoria-servicio/rutas'));

///
app.use('/horario-reinscripcion', horarioReinscripcionRouter)
///

app.listen(3000, function() {
    console.info('Backend escuchando en el puerto 3000');
});
