'use strict';
const ololog = require('ololog');
const express = require('express');
const app = express();

app.use(express.static('/public'));

app.get('/', function (request, response) {
    response.send(request.query);
})

app.listen('8080', () => {
    ololog.lightRed('This is not a Error: Server running at "http://localhost:8080"');
});
