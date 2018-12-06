/*const express = require('express');
const router = express.Router();

const tutoCtrl = require('../controllers/tutorias.controladores');


router.get('/', tutoCtrl.getTutorias);
router.get('/:id', tutoCtrl.getTutoria);

module.exports = router;*/
const { Router } = require('express')

const {
    informacionTutorias
  } = require('./modelos.js')
  
  const informacionTutoriasRouter = Router()

  informacionTutoriasRouter.get('/', (req, res, next) => {  
    informacionTutorias.find()
      .then(infotuto => res.json({ infotuto }))
      .catch(next)
  })  

  module.exports = {
    informacionTutoriasRouter
    }
