const mongoose = require('mongoose')


const datosResidenciasSchema =  new mongoose.Schema({
  folio{type:String,required:true}
   noctrl{type:String,required:true}
   carrera{type:String,required:true}
   nombreAlumno{type:String,required:true}
   seguimiento1{type:String,required:true}
   seguimiento2{type:String,required:true}
   seguimiento3{type:String,required:true}
   nombreProyecto{type:String,required:true}
   nctrl{type:String,required:true}
   empresa{type:String,required:true}
   asesorInt{type:String,required:true}
   asesorExt{type:String,required:true}
   dictamen{type:String,required:true}
   portadaAnt{type:String,required:true}
   asesorInt2{type:String,required:true}
   reporteFinal{type:String,required:true}
   revFinal{type:String,required:true}
   )



module.exports = {
  datosResidencias: mongoose.model('datosResidenciasSchema', datosResidenciasSchema)
 

}