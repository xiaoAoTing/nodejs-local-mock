'use strict';
const ololog = require('ololog');
const express = require('express');
const app = express();

app.use(require('./routers/mock'));

app.set('jsonp callback name', 'callback');

app.use('/public', express.static('public', {
    extensions: ['html', 'htm', 'js', 'json']
}));

app.listen('8080', () => {
    ololog.lightGreen('Server running at "http://localhost:8080"');
});
