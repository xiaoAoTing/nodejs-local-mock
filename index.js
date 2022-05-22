'use strict';
const { generate } = require('./utils/generatePassword');
const server = require('./server/index');
const routers = require('./routers/index');

server.start(routers.route);

