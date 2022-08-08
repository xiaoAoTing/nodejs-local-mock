var http = require('http');

var postData = JSON.stringify({
    name: '王二狗子'
});

// 用于请求的选项
// var options = {
//     host: 'localhost',
//     port: '8080',
//     path: '/index/',
//     method: 'post',
//     headers: {
//         'Content-Type': 'application/json',
//         'Content-Length': Buffer.byteLength(postData)
//     }
// };

// 用于请求的选项
var options = {
    host: 'dldir1.qq.com',
    port: '443',
    path: '/tgc/wegame/full/WeGameMiniLoader.std.3.12.02.1620.exe',
    method: 'get',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
    }
};

// 处理响应的回调函数
var callback = function (res) {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Headers: ${JSON.stringify(res.headers)}`);
    let receive = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`Chunk: ${chunk}`);
        receive += chunk;
    });
    res.on('end', () => {
        console.log(`Receive: ${receive}`);
        console.log('No more data in response.');
    });
}

// 向服务端发送请求
var req = http.request(options, callback);
req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.write(postData);
req.end();