const url = require('url');
const querystring = require('querystring');
const fs = require('fs');
const path = require('path');

const { MEDAL_CAMPERS } = require('../config/constant');
const DIRECTORY = MEDAL_CAMPERS;

function route(request, response) {
    let pathname = url.parse(request.url).pathname;
    let qs = querystring.parse(request.url.split('?')[1]);

    if (pathname == '/') {
        response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        fs.readFile('./index.html', 'utf8', function (err, dataStr) {
            if (err) {
                return response.end(err);
            }
            response.end(dataStr);
        })
        return;
    }

    if (qs.callback) {
        response.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });

        let basename = path.basename(pathname);
        let data = require(`/mock/${DIRECTORY}/${basename}`);

        data = JSON.stringify(data);
        let callback = qs.callback + '(' + data + ');';

        response.end(callback);
    }

    else {
        response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        response.end('Not the jsonp\n');
    }
}

module.exports = {
    route
}