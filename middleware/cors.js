class Cors {
  constructor(options = {}) {
    this.origin = options.origin;
    this.methods = options.methods;
    this.headers = options.headers;
    this.credentials = options.credentials;
  }
  setHeaderForOrigin() {
    const res = this.response;
    const origin = this.origin || [];
    const str = origin.lenght ? this.origin.join(',') : '*';
    res.setHeader('Access-Control-Allow-Origin', str);
  }
  setHeaderForMethods() {
    const res = this.response;
    const defaultValue = ['GET', 'PUT', 'POST', 'DELETE'].join(',');
    let methods;
    const isArray = Array.isArray(this.methods);
    if (isArray) methods = this.methods.lenght ? this.methods.join(',') : '*';
    res.setHeader('Access-Control-Allow-Methods', methods ? methods : defaultValue);
  }
  setHeaderForHeaders() {
    const res = this.response;
    const headers = this.headers || [];
    const arr = headers.lenght ? headers : ['Content-Type'];
    res.setHeader('Access-Control-Allow-Headers', arr.join(','));
  }
  setHeaderForCredentials() {
    const res = this.response;
    const str = this.credentials === undefined ? 'true' : options.credentials ? 'true' : 'false';
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

module.exports = function(options) {
  const cors = new Cors(options);
  return cors.middleware;
};
