require('./config/config')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

/**
 * Routers
 */
const alumnosRouter = require('./routes/alumnos.js')
const {
  preguntasEvaluacionesRouter,
  respuestasEvaluacionesRouter,
  adeudosAlumnosRouter,
  maestrosMateriasRouter
} = require('./evaluacion-docente')
const {
  gruposCargadosRouter
} = require('./grupos-cargados')

const {
    prefichaPagoRouter
  } = require('./preficha-pago')

///
const {
  horarioReinscripcionRouter
} = require('./horario-reinscripcion')
const {
  semestresMateriaRouter,
  maestrosMateriaRouter
} = require('./seleccion-materias')
const {
  actividadesRouter,
  maestrosExtraescolarRouter,
  extraescolarSeleccionadaRouter,
  extraescolarAgregadaRouter
} = require('./extraescolar')
const {
  calificacionexamenRouter
} = require('./calificaciones-examenes')
const {
  calificacionesParcialesRouter
} = require('./calificaciones-parciales')
const {
  becaRouter
} = require('./verificacion-beca')
const {
  kardexCalificacionesRouter
} = require('./kardex-calificaciones')
const app = express()
const {
  informacionTutoriasRouter
} = require('./tutorias')

app.use(cors({ origin: 'http://localhost:4200'}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/alumnos', alumnosRouter)
app.use('/preguntas-evaluaciones', preguntasEvaluacionesRouter)
app.use('/respuestas-evaluaciones', respuestasEvaluacionesRouter)
app.use('/adeudos-alumnos', adeudosAlumnosRouter)
app.use('/maestros-materias', maestrosMateriasRouter)
app.use('/grupos-cargados', gruposCargadosRouter)
app.use('/seleccion-materias', semestresMateriaRouter)
app.use('/seleccion-materias-maestros', maestrosMateriaRouter)
app.use('/horario-reinscripcion', horarioReinscripcionRouter)
app.use('/extraescolar',  actividadesRouter)
app.use('/extraescolar-maestros',  maestrosExtraescolarRouter)
app.use('/extraescolar-seleccionada',  extraescolarSeleccionadaRouter)
app.use('/extraescolar-agregada',  extraescolarAgregadaRouter)
app.use('/preficha-pago',  prefichaPagoRouter)
app.use('/extraescolar', actividadesRouter)
app.use('/extraescolar-maestros', maestrosExtraescolarRouter)
app.use('/extraescolar-seleccionada', extraescolarSeleccionadaRouter)
app.use('/extraescolar-agregada', extraescolarAgregadaRouter)
app.use('/grupos-cargados', gruposCargadosRouter)
app.use('/calificaciones-parciales', calificacionesParcialesRouter)
app.use('/calificaciones-examenes', calificacionexamenRouter)
app.use('/verificion-beca', becaRouter)
app.use('/kardex-calificaciones', kardexCalificacionesRouter)
app.use('/tutorias', informacionTutoriasRouter)
app.use(require('./auditoria-servicio/rutas'))

app.listen(3000, function () {
  mongoose.connect('mongodb://localhost:27017/siit', { useNewUrlParser: true })
  mongoose.connection.on('error', console.error)
  console.info('Backend escuchando en el puerto 3000')
})

