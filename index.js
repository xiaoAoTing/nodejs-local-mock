'use strict';
const ololog = require('ololog');
const express = require('express');
const app = express();
const errorHandling = require('./middleware/error-handling');
const cors = require('cors');
// const customBodyParser = require('./middleware/custom-body-parser');
// const myCors = require('./middleware/cors');

/**
 * Express set.
 */
const JSONP_CALLBACK_NAME = 'callback';
app.set('jsonp callback name', JSONP_CALLBACK_NAME);

/**
 * Express middleware
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
// app.use(customBodyParser());
// app.use(myCors());

/**
 * Static file
 */
app.use('/public/mock', express.static('public/mock', {
  extensions: ['html', 'htm', 'js', 'json'],
}));
app.use('/public/page', express.static('public/page', {
  extensions: ['html', 'htm', 'js', 'json'],
}));
app.use('/public/js', express.static('public/js', {
  extensions: ['html', 'htm', 'js', 'json'],
}));

/**
 * Router
 */
app.use('/index', require('./routers/index'));
app.use('/mock', require('./routers/mock'));

/**
 * Error handling
 */
app.use(errorHandling());

app.listen('8080', () => {
  ololog.lightGreen('Server running at "http://localhost:8080"');
});
