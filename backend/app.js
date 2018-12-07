require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/siit', { useNewUrlParser: true })

const alumnosRouter = require('./routes/alumnos.js')
const {
    preguntasEvaluacionesRouter,
    respuestasEvaluacionesRouter,
    adeudosAlumnosRouter
} = require('./evaluacion-docente')
///
const {
  informacionTutoriasRouter
} = require('./tutorias')  

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
<<<<<<< HEAD
    maestrosExtraescolarRouter
} = require('./extraescolar')
=======
      maestrosExtraescolarRouter,
      extraescolarSeleccionadaRouter
  } = require('./extraescolar')
>>>>>>> af8ca343a96eb8406181db602cdb9a508a70b62c

  const {
       calificacionexamenRouter
    } = require('./calificaciones-examenes')

  const { 
      calificacionesParcialesRouter
} = require('./calificaciones-parciales')

  const {




      becaRouter
  } = require('./verificacion-beca')
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/alumnos', alumnosRouter);

/**
 * Evaluacion docente
 */
app.use('/preguntas-evaluaciones', preguntasEvaluacionesRouter)
app.use('/respuestas-evaluaciones', respuestasEvaluacionesRouter)
app.use('/adeudos-alumnos', adeudosAlumnosRouter)
<<<<<<< HEAD
app.use('/seleccion-materias', semestresMateriaRouter)
app.use('/seleccion-materias-maestros', maestrosMateriaRouter)
app.use('/extraescolar', actividadesRouter)
app.use('/extraescolar-maestros', maestrosExtraescolarRouter)
    /**************
     *   Auditoria servicios
     */
app.use("/api", require('./auditoria-servicio/rutas'));

///
app.use('/horario-reinscripcion', horarioReinscripcionRouter)
    ///

=======
///
app.use('/tutorias', informacionTutoriasRouter)
app.use('/seleccion-materias', semestresMateriaRouter )
app.use('/seleccion-materias-maestros',  maestrosMateriaRouter)
app.use('/horario-reinscripcion', horarioReinscripcionRouter)
app.use('/extraescolar',  actividadesRouter)
app.use('/extraescolar-maestros',  maestrosExtraescolarRouter)
app.use('/extraescolar-seleccionada',  extraescolarSeleccionadaRouter)
app.use('/grupos-cargados',  gruposCargadosRouter)
app.use('/calificaciones-parciales', calificacionesParcialesRouter)
app.use('/calificaciones-examenes', calificacionexamenRouter)
app.use('/verificion-beca', becaRouter)
/**************
 *   Auditoria servicios
 */
app.use(require('./auditoria-servicio/rutas'));

>>>>>>> af8ca343a96eb8406181db602cdb9a508a70b62c
app.listen(3000, function() {
    console.info('Backend escuchando en el puerto 3000');
});