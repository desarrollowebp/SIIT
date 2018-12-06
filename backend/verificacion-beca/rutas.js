const { Router } = require('express')

const {
  beca,
     

} = require('./modelos.js')

const becaRouter = Router()

/**
 * datos beca alumno
 */
becaRouter.get('/', (req, res, next) => {
  beca.find()
    .then(becadatos => res.json({ becadatos }))
    .catch(next)
})

/**
 *beca
 */

/**
 *beca
 */


module.exports = {
  becaMateriaRouter,
  

}
