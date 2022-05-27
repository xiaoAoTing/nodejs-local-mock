const qs = require('qs');

/**
 * 主体内容解析器
 * @param {Object} request 请求对象
 * @param {Object} response 响应对象
 * @param {Function} next 放行函数
 */
function customBodyParser(request, response, next) {
  let data = '';
  request.on('data', function(chunk) {
    data += chunk;
  });
  request.on('end', function() {
    request.body = qs.parse(data);
    next();
  });
}

module.exports = function() {
  return customBodyParser;
};
