const express = require('express');
let router = express.Router();
let fs = require('fs');
let request = require('request')
let path = require('path')

router.get('/getImg', function (req, res) {
  // console.log(1231231232131);
  // request.get({
  //   url: `http://localhost:8080/images/wall.png`,
  //   json: req.body,
  //   gzip: true,
  //   headers: {
  //     'Content-Type': 'application/octet-stream',
  //     'usertoken': req.headers.usertoken,
  //   },
  // }).on('response', function (response) {

  // });

  fs.readFile(path.join('./public/images/wall.png'), function (err, blob) {
    if (err) {
      res.sendStatus(404)
      return
    }
    res.pipe(blob)
  })

})


router.get('/getZIP', function (req, res) {
  // console.log(1231231232131);
  // request.get({
  //   url: `http://localhost:8080/images/wall.png`,
  //   json: req.body,
  //   gzip: true,
  //   headers: {
  //     'Content-Type': 'application/octet-stream',
  //     'usertoken': req.headers.usertoken,
  //   },
  // }).on('response', function (response) {

  // });

  fs.readFile('./public/images/avatar.zip', function (err, blob) {
    if (err) {
      res.sendStatus(404)
      return
    }
    res.pipe(blob)
  })

})

module.exports = router;