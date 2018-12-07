<<<<<<< HEAD
=======
//prueba para subirlo x3
>>>>>>> bc6ac46295d95f9da42364f468ea1cf56d139101

const { Router } = require('express')

const {
  gruposCargados
} = require('./modelos.js')

<<<<<<< HEAD
const miGrupo=new gruposCargados({ grupo: '1M', 
	materia: 'CALCULO DIFERENCIAL\n', 
	codigo: 'CO1001\n', 
	facilitador: 'VILLARREAL REYES ELIZABETH SORAYA', 
	lunes: '17:00 - 18:00\n', 
	salonl: 'EE10', 
	martes: '17:00 - 18:00\n', 
	salonma: 'EE10', 
	miercoles: '17:00 - 18:00\n', 
	salonmi: 'EE10', 
	jueves: '17:00 - 18:00\n', 
	salonj: 'EE10', 
	viernes: '17:00 - 18:00\n', 
	salonv: 'EE10', 
	sabado:'', 
	salons: '' }
)

//

=======
const miGrupo=new gruposCargados({}
)

>>>>>>> bc6ac46295d95f9da42364f468ea1cf56d139101
const gruposCargadosRouter = Router()

gruposCargadosRouter.get('/', (req, res, next) => {
  gruposCargados.find()
    .then((grupos) => res.json({ grupos }))
    .catch(next)
})

module.exports = {
  gruposCargadosRouter
}