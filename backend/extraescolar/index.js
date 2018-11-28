var express = requiere('express');
var router = express.Router()
var mongo= requiere('mongoose');
var assert = requiere('assert')

var url='moongose://localhost:3000/test';

router.get('/', function(req,res,next){
    res.render('index', {})
});

router.get('/get-data', function(req,res,next){
    mongo.connect(url, function(err,db){
        assert.equal(null,err);
        var cursor=db.collection(user-data).fin();
        cursor.forEach(function(doc,err){
            assert.equal(null,err);
            resultArray.push(doc);
        }, function(){
            db.close();
            res.render('index',{items: resultArray});
        });
    });
});

router.post('insert', function(req,res,next){
    var item={
        periodo= req.body.periodo,
        nombre = req.body.nombre,
        grupo = req.body.grupo,
        promotor= req.body.promotor,
        hInicial= req.body.hInicial,
        hFinal= req.body.hFinal,
        dias = req.body.dias
    };

    mongo.connect(url,function(err,db){
        assert.equal(null,err);
        db.collection('user-data').insertOne(item, function(err,result){
            assert.equal(null,err);
            console.log('se inserto elemento');
            db.close();
        });
    });
    res.redirect('/');
});
/*periodo: gru.periodo, nombre: gru.nombre, grupo: gru.grupo,
promotor: gru.promotor, hInicial: gru.hInicial, hFinal: gru.hFinal,
dias: gru.dias*/