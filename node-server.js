'use strict';
const http = require('http'); // 通过 require 将 http 库包含到程序中
const url = require('url'); // 引入 url 模块解析 url 字符串
const querystring = require('querystring'); // 引入 querystring 模块处理 query 字符串
const fs = require('fs');
const server = http.createServer(); // 创建新的 HTTP 服务器

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

    if (qs.callback) {
        res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });

        let filename = urlPath.replace(/\/mock\//, '');
        let data = require(`./${DIRECTORY}/${filename}`);

        data = JSON.stringify(data);
        let callback = qs.callback + '(' + data + ');';

        console.log(callback, 'Response !');
        res.end(callback);
    }

    // else {
    //     res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    //     res.end('Not the jsonp\n');
    // }

    if (urlPath == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        fs.readFile('./index.html', 'utf8', function(err, dataStr) {
            if (err) {
                return res.end(err);
            }
            res.end(dataStr);
        })
    }

});

server.listen('8080', () => {
    console.log('Server running! 8080');
});
