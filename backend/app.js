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

app.listen(3000, function () {
  console.info('Backend escuchando en el puerto 3000');
});
