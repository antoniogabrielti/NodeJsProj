const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

require('./model/users.routes')(app);

app.listen(port, function(){
    console.log(`Servidor iniciado em localhost:${port}. Ctrl+C para encerrar…`);
})