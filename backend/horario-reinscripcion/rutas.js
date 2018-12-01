//aqui va alumnos
const { Router } = require('express')

const {
  horarioReinscripcion
} = require('./modelos.js')

//const adeudosHorarioAlumnosRouter = Router()
const misDatos=new horarioReinscripcion({
  grupo: '1M',
  nombres: 'Alejandro Marrufo Quintana',
  fecha: '20/11/2018',
  hora: '10:40',
  autorizado: 'Si',
  biblioteca: 'Si',
  financieros: 'Si',
  encuesta: 'Si' }
  )
misDatos.save();

const horarioReinscripcionRouter = Router()

horarioReinscripcionRouter.get('/', (req, res, next) => {
  horarioReinscripcion.find()
    .then((datos) => res.json({ datos }))
    .catch(next)
})

module.exports = {
  horarioReinscripcionRouter
}
