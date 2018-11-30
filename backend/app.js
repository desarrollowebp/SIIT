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
<<<<<<< HEAD

const {
    grupposCargadosRouter
} = require('./grupos-cargados')
=======
>>>>>>> b949cc9ffd7643bec59a164cdfc308dd4837c71a

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
<<<<<<< HEAD
app.use('/grupos-cargados', gruposCargadosRouter)
=======
>>>>>>> b949cc9ffd7643bec59a164cdfc308dd4837c71a

/**************
 *   Auditoria servicios
 */
app.use(require('./auditoria-servicio/rutas'));



app.listen(3000, function() {
    console.info('Backend escuchando en el puerto 3000');
});