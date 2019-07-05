const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');

const server = express();

//bodyParser om eenvoudig de versuurde body op te halen
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use( '/api', routes);

server.listen(process.env.port || 4000, () => {
    console.log('Listening for requests');
});