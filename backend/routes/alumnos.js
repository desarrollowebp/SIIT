const { Router } = require('express');
const Alumno = require('../models/Alumno.js');
const router = Router();

router.get('/', function (req, res, next) {
  Alumno.find(function (err, alumnos) {
    if (err) return next(err);

    res.json({ data: alumnos })
  });
});

module.exports = router;
