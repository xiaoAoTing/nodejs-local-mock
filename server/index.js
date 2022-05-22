'use strict';
const http = require('http');
const ololog = require('ololog');

function start(route) {
    const server = http.createServer();

    server.on('request', function (request, response) {

        route(request, response);

    });

    server.listen('8080', () => {
        ololog.lightRed('This is not a Error: Server running at "http://localhost:8080"');
    });
}

module.exports = {
    start
}