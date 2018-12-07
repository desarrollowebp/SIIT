const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const alumnosRouter = require('./routes/alumnos.js')
const {
  preguntasEvaluacionesRouter,
  respuestasEvaluacionesRouter,
  adeudosAlumnosRouter
} = require('./evaluacion-docente')
const {
  informacionTutoriasRouter
} = require('./tutorias')
const {
  gruposCargadosRouter
} = require('./grupos-cargados')
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
  extraescolarSeleccionadaRouter
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

const app = express()

/**
 * Middleware
 */
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/**
 * Rutas
 */
app.use('/alumnos', alumnosRouter)
app.use('/preguntas-evaluaciones', preguntasEvaluacionesRouter)
app.use('/respuestas-evaluaciones', respuestasEvaluacionesRouter)
app.use('/adeudos-alumnos', adeudosAlumnosRouter)
app.use('/tutorias', informacionTutoriasRouter)
app.use('/seleccion-materias', semestresMateriaRouter)
app.use('/seleccion-materias-maestros', maestrosMateriaRouter)
app.use('/horario-reinscripcion', horarioReinscripcionRouter)
app.use('/extraescolar', actividadesRouter)
app.use('/extraescolar-maestros', maestrosExtraescolarRouter)
app.use('/extraescolar-seleccionada', extraescolarSeleccionadaRouter)
app.use('/grupos-cargados', gruposCargadosRouter)
app.use('/calificaciones-parciales', calificacionesParcialesRouter)
app.use('/calificaciones-examenes', calificacionexamenRouter)
app.use('/verificion-beca', becaRouter)
app.use('/api', require('./auditoria-servicio/rutas'))

/**
 * Error Handler
 */
app.use((err, req, res, next) => {
  res.status(500).json({ error: err })
})

/**
 * Listen
 */
app.listen(3000, () => {
  mongoose.connect('mongodb://localhost:27017/siit', { useNewUrlParser: true })
  mongoose.connection.on('error', console.error)
  console.log('Backend escuchando en el puerto 3000')
})
