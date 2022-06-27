'use strict';
const ololog = require('ololog');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const errorHandling = require('./middleware/error-handling');
const cors = require('cors');
// const customBodyParser = require('./middleware/custom-body-parser');
// const myCors = require('./middleware/cors');

const DIRECTORY = {
  INTEGRAL_MOCK: 'integral-mock',
  ASSION_GROUPS: 'assion-groups',
  DRILLMASTER_TRAINING: 'drillmaster-training',
  DATA_PANEL: 'data-panel',
  MEDAL_CAMPERS: 'medal-campers',
};
const CURRENT_DIRECTORY = DIRECTORY['MEDAL_CAMPERS'];

// Setting
const JSONP_CALLBACK_NAME = 'callback';
app.set('jsonp callback name', JSONP_CALLBACK_NAME);

/**
 * Handling JSONP requests.
 * The request must be defined before CORS.
 */
app.get('/mock/:filename', function(req, res) {
  console.log(`Enter`);
  const basename = req.params.filename;
  const paths = ['./public/mock/', CURRENT_DIRECTORY, basename + '.json'];
  const filePath = path.join.apply(null, paths);

  if (!req.query[JSONP_CALLBACK_NAME]) {
    res.send('Not the JSONP');
  }

  fs.readFile(filePath, function(err, buf) {
    if (err) {
      res.sendStatus(404);
      return;
    }
    res.jsonp(JSON.parse(buf.toString()));
  });
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
// app.use(customBodyParser());
// app.use(myCors());

// Static
app.use('/public', express.static('public', {
  extensions: ['html', 'htm', 'js', 'json'],
}));

// Router
app.use('/index', require('./routers/index'));

// Error handling
app.use(errorHandling());

app.listen('8080', () => {
  ololog.lightGreen('Server running at "http://localhost:8080"');
});
