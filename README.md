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
$.ajax({
    url: 'http://localhost:8080/mock/' + 目录名 + 文件名,
    data: {},
    dataType: 'jsonp',
    jsonpCallback: 'jsonp_callback' + 随机串,
    method: 'post',
    beforeSend() {
        // javascript code 
    }
}).done(function (res) {
    // javascript code 
})
```

# Directory

```
-project    
    -mock                 // 前端 Mock 服务 json 文件存放目录
        -data-panel       
            getInfo.json
            goodsList.json
    -db                   // 数据库文件，存取整站页面上所有数据
    -models               // 数据库模型，和 schemas 下的表结构一一对应
        user.js
        category.js
        content.js
    -schemas              // 表结构，一个js文件对应一张表，定义每张表的数据结构
        users.js          
        categories.js
        contents.js
    -node_modules
    -public               // 静态资源存放区
        css
        img
        font
        -js
            jquery.js   
            bootstrap.js
            index.js
    -routers              // 三个路由模块，分别处理不同的业务逻辑
        api.js            // api模块；负责处理前台页面登录注册及提交评论等
        main.js           // 负责接收前台操作请求、渲染前台页面
        admin.js          // 负责接收后台管理操作请求、渲染后台页面
    -views                // 所有浏览请求后端返回的页面都从这里取
        mian
        -admin
            index.html
            layout.html
            view.html
    index.js              // 入口文件，运行它就等于开启了我们的服务器
    package.json          // 在这里可以查询你安装的中间件及其版本号
```