# nodejs-local-mock
>   Jsonp local simulation data

## Mock 数据

1. 开启服务器 nodemon node-server.js + enter.
2. `http://localhost:8080/mock/${filename}` 请求地址
3. 请求方式 jsonp 回调名: callback 
4. `node-server` 文件中 `DIRECTORY` 常量表示当前调试的目录, 比如现在等于 INTEGRAL_MOCK 表示调试的 integral-mock 目录


## Usage
请求方式 `jsonp`, query 数据中携带回调函数名为 `callback`;
```javascript
let loading = null
$.ajax({
    url: 'http://localhost:8080/mock/' + 目录名 + 文件名,
    data: {},
    dataType: 'jsonp',
    jsonpCallback: 'jsonp_callback' + 随机串,
    method: 'post',
    beforeSend() {
        loading = layer.load(1, {
            shade: [0.3, '#000']
        });
    }
}).done(function (res) {
    layer.close(loading)
    if (res.code != 0) return;
    
})
```
