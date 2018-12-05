//aqui va alumnos
const { Router } = require('express')

const {
  horarioReinscripcion
} = require('./modelos.js')
/*
//const adeudosHorarioAlumnosRouter = Router()
<<<<<<< HEAD

const horaDatos=new horarioReinscripcion({ 
grupo: '1M',
nombres: 'Alejandro Marrufo Quintana',
fecha: '20/11/2018',
hora: '10:40',
autorizado: 'Si',
biblioteca: 'Si',
financieros: 'Si',
=======
const misDatos=new horarioReinscripcion({
/*  grupo: '1M',
  nombres: 'Alejandro Marrufo Quintana',
  fecha: '20/11/2018',
  hora: '10:40',
  autorizado: 'Si',
  biblioteca: 'Si',
  financieros: 'Si',
>>>>>>> 1c053a9eca09ab4777eae3a16ca388b45b81225b
encuesta: 'Si' }
  )
//misDatos.save();*/


const horarioReinscripcionRouter = Router()

horarioReinscripcionRouter.get('/', (req, res, next) => {
  horarioReinscripcion.find()
    .then((datosHorario) => res.json({ datosHorario }))
    .catch(next)
})

module.exports = {
  horarioReinscripcionRouter
}
