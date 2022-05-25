function errorHandling(err, request, response, next) {
    let logContent = `
		\nError message: ${err.message};
		\nURL: ${request.originalUrl};
		\nTime: ${new Date()}
	`;

	fs.appendFileSync('./log.txt', logContent);

	response.send('Error message: ' + err.message); // 返回错误信息至客户端
    next();
}

module.exports = errorHandling;