require('./config/config');

const express = require('express');
const app = express();
const port = process.env.PORT;

// Body parser
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/usuario', ( req, res ) => {
    res.json({value:'get usuario'});
});

app.post('/usuario', ( req, res ) => {
    let body = req.body;

    if( body.name === undefined ){
        res.status(400).json({
            ok: false,
            message: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });
    }

});

app.put('/usuario/:id', ( req, res ) => {
    let id = req.params.id;
    res.json({
        value:'Put usuario',
        id
    });
});

app.delete('/usuario/:id', ( req, res ) => {
    res.json({value:'delete usuario'});
});

app.listen( port, ()  => {
    console.log('Escuchando puerto ' + port);
});