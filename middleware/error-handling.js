/**
 * express 错误处理中间件
 * @param {Object | Null} err 错误对象
 * @param {Object} request 请求对象
 * @param {Object} response 响应对象
 * @param {Function} next 放行函数
 */
function errorHandling(err, request, response, next) {
  const errMsg = `Error message: ${err.message};`;
  const errUrl = `URL: ${request.originalUrl};`;
  const time = `Time: ${new Date()}`;
  fs.appendFileSync('./log.txt', errMsg + errUrl + time);

  response.send('Error message: ' + err.message); // 返回错误信息至客户端
  next();
}

module.exports = function() {
  return errorHandling;
};
