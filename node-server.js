'use strict';
const http = require('http'); 
const url = require('url'); 
const querystring = require('querystring'); 
const fs = require('fs');
const server = http.createServer(); 
const ololog = require('ololog');

const INTEGRAL_MOCK = 'integral-mock';
const ASSION_GROUPS = 'assion-groups';
const DRILLMASTER_TRAINING  = 'drillmaster-training'
const DATA_PANEL = 'data-panel';
const MEDAL_CAMPERS = 'medal-campers';
const DIRECTORY = MEDAL_CAMPERS; // 当前测试目录模块;

// 监听服务器请求事件
server.on('request', function (req, res) {
    let urlPath = url.parse(req.url).pathname;
    let qs = querystring.parse(req.url.split('?')[1]);

    console.log('Listened for requests !');

    if (urlPath == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        fs.readFile('./index.html', 'utf8', function(err, dataStr) {
            if (err) {
                return res.end(err);
            }
            res.end(dataStr);
        })
        return ;
    }

    if (qs.callback) {
        res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });

        let filename = urlPath.replace(/\/mock\//, '');
        let data = require(`./${DIRECTORY}/${filename}`);

        data = JSON.stringify(data);
        let callback = qs.callback + '(' + data + ');';

        res.end(callback);
    }

    else {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        res.end('Not the jsonp\n');
    }

});

server.listen('8080', () => {
    ololog.lightRed('This is not a Error: Server running at "http://localhost:8080"');
});
