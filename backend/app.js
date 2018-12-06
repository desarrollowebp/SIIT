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
///
const {
    informacionTutoriasRouter
  } = require('./tutorias')  

  const {
       calificacionexamenRouter} = require('./calificaciones-examenes')
  const { calificacionesParcialesRouter} = require('./calificaciones-parciales')


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
app.use('/horario-reinscripcion', horarioReinscripcionRouter)
app.use('/extraescolar',  actividadesRouter)
app.use('/extraescolar-maestros',  maestrosExtraescolarRouter)
<<<<<<< HEAD
app.use('/tutorias', informacionTutoriasRouter)

=======
app.use('/grupos-cargados',  gruposCargadosRouter)
app.use('/calificaciones-parciales', calificacionesParcialesRouter)
app.use('/calificaciones-examenes', calificacionexamenRouter)
>>>>>>> 9dca04f980990f3342cc8a3d80703e4ce0a2db88
/**************
 *   Auditoria servicios
 */
app.use(require('./auditoria-servicio/rutas'));

app.listen(3000, function() {
    console.info('Backend escuchando en el puerto 3000');
});
