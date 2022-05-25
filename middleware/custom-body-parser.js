const qs = require('qs');

function customBodyParser(request, response, next) {
    let data = '';
    request.on('data', function (chunk) {
        data += chunk;
    })
    request.on('end', function () {
        request.body = qs.parse(data);
        next()
    })
}

module.exports = customBodyParser;