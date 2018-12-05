<<<<<<< HEAD
mongoose.connect('mongodb://localhost:27017/siit', { useNewUrlParser: true })
 const alumnosRouter = require('./routes/alumno.js')
const {
  datosResidenciasRouter,
  respuestasResidenciasRouter,
  residenteAlumnoRouter
} = require('./residencias-alumno')
 const app = express();
 @@ -14,6 +19,13 @@ app.use(bodyParser.json())
 app.use('/alumno', alumnoRouter);
 /**
 * Evaluacion docente
 */
app.use('/datos-residencias', preguntasEvaluacionesRouter)
app.use('/respuestas-residencias', respuestasEvaluacionesRouter)
app.use('/residente-alumno', residenteAlumnoRouter)
 app.listen(3000, function () {
  console.info('Backend escuchando en el puerto 3000');
});
  
27  backend/residencias-alumno/index.js
@@ -0,0 +1,27 @@
const {
  datosResidencias,
  respuestasResidencias,
  residenteAlumno
} = require('./modelos.js')
 const {
  datosResidenciasRouter,
  respuestasResidenciasRouter,
  residenteAlumnoRouter
} = require('./rutas.js')
 module.exports = {
  /**
   * Modelos
   */
  datosResidencias,
  respuestasResidencias,
  residenteAlumno,
   /**
   * Rutas
   */
  datosResidenciasRouter,
  respuestasResidenciasRouter,
  residenteAlumnoRouter
}
  
23  backend/residencias-alumno/modelos.js
@@ -0,0 +1,23 @@
const mongoose = require('mongoose')
 const datosResidenciaSchema =  new mongoose.Schema({
  datos: String
})
 const respuestasResidenciasSchema = new mongoose.Schema({
  folio: String,
  respuestas: [{
    type: String
  }]
})
 const residenteAlumnoSchema = new mongoose.Schema({
  numeroControl: Number,
  datosResidencias: String
})
 module.exports = {
  datosResidencias: mongoose.model('datosResidencias', preguntasResidenciasSchema),
  respuestasResidencias: mongoose.model('respuestasResidencias', respuestasResidenciasSchema),
  residenteAlumno: mongoose.model('residenteAlumno', residenteAlumnoSchema)
}
  
44  backend/residencias-alumno/rutas.js
@@ -0,0 +1,44 @@
const { Router } = require('express')
 const {
  datosResidencias,
  respuestasResidencias,
  residenteAlumno
} = require('./modelos.js')
 const datosResidenciasRouter = Router()
const respuestasResidenciasRouter = Router()
const residenteAlumnoRouter = Router()
 /**
 * datos del residente
 */
datosResidenciasRouter.get('/', (req, res, next) => {
  datosResidencias.find()
    .then(preguntas => res.json({ preguntas }))
    .catch(next)
})
 /**
 * Respuestas 
 */
respuestasResidenciasRouter.put('/', (req, res, next) => {
  respuestasResidencias.create(req.body)
    .then(() => res.json({ success: true }))
    .catch(next)
})
 /**
 * Adeudos Alumnos
 */
residenteAlumnoRouter.post('/', (req, res, next) => {
  residenteAlumno.findByIdAndUpdate({ numeroControl: req.body.numeroControl }, { $set: { residenciasAlumno: true }})
    .then(() => res.json({ success: true }))
    .catch(next)
})
 module.exports = {
  datosResidenciasRouter,
  respuestasResidenciasRouter,
  residenteAlumnoRouter
=======
const { Router } = require('express')

const {
  folio,
  respuestasResidencias,

} = require('./modelos.js')

const datosResidenciasRouter = Router()
const respuestasResidenciasRouter = Router()

/**
 * Preguntas Evaluaciones
 */
datosResidenciasRouter.get('/', (req, res, next) => {
  datosResidencias.find()
    .then(datos => res.json({ datos }))
    .catch(next)
})

/**
 * Respuestas Evaluaciones
 */
respuestasResidenciaRouter.put('/', (req, res, next) => {
  respuestasResidencias.create(req.body)
    .then(() => res.json({ success: true }))
    .catch(next)
})



module.exports = {
  datosResidenciasRouter,
  respuestasResidenciasRouter
  
>>>>>>> 03403cc655d7ea17f03749234b42fc02b10a79ef
}