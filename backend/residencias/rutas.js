const {Router} = requiere('express')
const {
  datosResidencias
} = require ('./modelos.js')
const datosResidenciasRouter= Router()
datosResidenciasRouter.get('/',(req,res,next)=>){
  datosResidencias.find()
  .then(inforesi => res.json({inforesi}))
  .catch(next)
})
module.export = {
  datosResidenciasRouter
}