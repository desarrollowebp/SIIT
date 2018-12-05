const express = require('express');
const app = express();
//  obtener clientes verificar si tiene sesion iniciada 
//let { verificartoken} = require();
let Audtoria = require('../../models/auditoria/auditoria');
let Respuestas = require('../../models/auditoria/auditoriarespuestas');

//cargar todas las preguntas
app.get('/auditoria:id', async(req, res) => {
    // Auditoria.findById()
    await res.status(200).send({
        mensaje: 'Funcionando'

    })
})

//actualizar las preguntas
app.put('/auditoria:id', (req, res) => {
    // Auditoria.findById()

    res.status(200).send({
        mensaje: 'Funcionando'

    })
})





// ====================================
// REGISTRAR RESPUESTAS DEL ALUMNO
// ====================================

app.post('/responauditoria', (req, res) => {


    let body = req.body;
    let respuesta = new Respuestas({
        fecha: body.fecha,

        // usuario: req.usuario

    });

    res.status(200).send({
        mensaje: 'Funcionando'

    })
})