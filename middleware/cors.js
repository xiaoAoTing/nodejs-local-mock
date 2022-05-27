class Cors {
    constructor(options) {
        this.origin = options.origin;
        this.methods = options.methods;
        this.headers = options.headers;
        this.credentials = options.credentials;
    }
    setHeaderForOrigin() {
        let res = this.response;
        let origin = this.origin || [];
        let str = origin.lenght ? this.origin.join(',') : '*';
        res.setHeader('Access-Control-Allow-Origin', str);
    }
    setHeaderForMethods() {
        let res = this.response;
        let defaultValue = ['GET', 'PUT', 'POST', 'DELETE'].join(',');
        let methods;
        let isArray = Array.isArray(this.methods);
        if (isArray) methods = this.methods.lenght ? this.methods.join(',') : '*';
        res.setHeader('Access-Control-Allow-Methods', methods ? methods : defaultValue);
    }
    setHeaderForHeaders() {
        let res = this.response;
        let headers = this.headers || [];
        let arr = headers.lenght ? headers : ['Content-Type'];
        res.setHeader('Access-Control-Allow-Headers', arr.join(','));
    }
    setHeaderForCredentials() {
        let res = this.response;
        let str = this.credentials === undefined ? 'true' : options.credentials ? 'true' : 'false';
        res.setHeader('Access-Control-Allow-Credentials', str);
    }
    middleware(req, res, next) {
        this.response = res;
        this.setHeaderForOrigin(res);
        this.setHeaderForMethods(res);
        this.setHeaderForHeaders(res);
        this.setHeaderForCredentials(res);
        next();
    }
}

module.exports = function (options) {
    let cors = new Cors(options);
    return cors.middleware;
}