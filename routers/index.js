const express = require('express');
let router = express.Router();

router.post('/', function (req, res) {
    console.log('接收到了 ~');
    res.send(req.body);
})

module.exports = router;