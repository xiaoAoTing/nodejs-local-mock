'use strict';
const ololog = require('ololog');
const express = require('express');
const app = express();
const errorHandling = require('./middleware/error-handling');
const customBodyParser = require('./middleware/custom-body-parser');

// Setting 
app.set('jsonp callback name', 'callback');

// Custom middleware 
app.use(customBodyParser);

// Static 
app.use('/public', express.static('public', {
    extensions: ['html', 'htm', 'js', 'json']
}));

// Router 
app.use('/mock', require('./routers/mock'));

// Error handling
app.use(errorHandling);

app.listen('8080', () => {
    ololog.lightGreen('Server running at "http://localhost:8080"');
});
