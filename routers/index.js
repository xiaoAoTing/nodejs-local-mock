const express = require('express');
let router = express.Router();

router.post('/', function (req, res) {
    console.log('接收到了 post ~');
    res.send(req.body);
})

router.get('/', function (req, res) {
    console.log('接收到了 get ~');
    res.send('Hello world');
})

router.post('/getUserInfo', function (req, res) {
    res.send({
        statusCode: 200,
        message: '操作成功',
        data: req.body || {}
    })
})

router.post('/saveToDatabase', function (req, res) {
    console.log('saveToDatabase execute !');
    res.send({
        statusCode: 200,
        message: '保存成功',
        data: req.body || {}
    })
})

module.exports = router;