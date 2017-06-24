'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const folder = '/../site/dist';

const {store} = require('./instagram/utils');

app.use(express.static(__dirname + folder));
app.use(bodyParser.json());

app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

require('./data/handlers')(app);

app.get('/ping', (req, res) => {
    res.status(200).send({'message': 'pong'});
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + folder + '/index.html'));
});

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname + folder + '/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server listening on port \"' + port + '\"');
});
