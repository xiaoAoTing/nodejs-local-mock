function myCors(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:9090');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
}

module.exports = function () {
    return myCors;
}