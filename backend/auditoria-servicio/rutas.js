/* post | get /auditoria
post  /responauditoria/ | get  /responauditoria/respuestas:id
get | responauditoria/verificar:id   regresa true o false  si el alumno ya realizo el cuestionario
 */
const express = require('express');
const app = express();
const { Auditoria, AuditoriaRespuestas } = require('./modelos');

//cargar todas las preguntas
app.get('/auditoria', async(req, res) => {
    /* 
para tener un paginaccion en caso de que quiran el usuario haga siguiente
 skip es que empieza posterior al numero dado por ejemplo 1 empiza en el 2 es limit es cantidad de datos
query son los parametros que se pasan por la direccion localhost:3000/auditoria?desde=0 */
    let desde = req.query.desde || 0;
    desde = Number(desde);
    let limite = req.query.limite || 0;
    limite = Number(limite);

    Auditoria.find({})
        .skip(desde)
        .limit(limite)
        .exec((err, preguntas) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            Auditoria.count({ preguntas: true }, (err, conteo) => {

                res.json({
                    preguntas,
                    cuantos: conteo
                });

            });


        });


})
app.post('/auditoria', (req, res) => {

    let body = req.body;
    let registrarRespuesta = new Auditoria({
        nombre: body.nombre,
        descripcion: body.descripcion,
        preguntas: body.preguntas
    });
    registrarRespuesta.save((err, auditoria) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            usuario: auditoria
        });


    });
})







// ====================================
// REGISTRAR RESPUESTAS DEL ALUMNO
// ====================================

app.post('/responauditoria/', (req, res) => {
    let body = req.body;

    let nuevapregunta = new AuditoriaRespuestas({
        usuario: body.usuario,

        respuestas: body.respuestas
    });
    nuevapregunta.save((err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            usuario: usuarioDB
        });


    });

});




// falta los get de abaja 
app.get('/responauditoria/respuestas:id', (req, res) => {

    // populate: usuario categoria
    // paginado
    let id = req.params.id;

    AuditoriaRespuestas.findById(id)
        .populate('usuario')
        .exec((err, respuestas) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            if (!respuestas) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'ID no existe'
                    }
                });
            }

            res.json({
                ok: true,
                producto: respuestas
            });

        });
});



app.get('/responauditoria/verificar:id', (req, res) => {

    // populate: usuario categoria
    // paginado
    let id = req.params.id;

    AuditoriaRespuestas.findById(usuario)
        .exec((err, existe) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            if (!existe) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'ID no existe'
                    }
                });
            }

            res.json({
                existe: true
            });

        });
});

module.exports = app;