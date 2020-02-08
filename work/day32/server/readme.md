### 项目目录解析
    config      : 放的是全局的配置文件
    controllers : 项目的控制器(实现后台的业务逻辑)
    db          :连接数据库
    middlewares :中间件(业务逻辑的校验中间件)
    models      :所有的数据库映射
    public      :项目的静态资源服务
    routes      :后台路由
    index.js    :项目的启动文件


### ODM框架
        1.moogose
            connection:连接数据库
            Schema    :对文档结构的一个映射
            model     :对文档进行操作的工具
            document  :model的一个实例 是对文档的一个抽象
            query     :查询(查到结果再次进行筛选)


### web框架
        1.koa2
            路由
            参数校验
            错误处理
        2. 路由
            有能力对不同的url做出不同的响应
            有能力对不同的http方法做出不同的响应
            有能力获取客户端的数据
            有能力向客户端返回响应
        3. 有能力获取客户端的数据?
             query:  ctx.query
             params: ctx.params
             body:   ctx.request.body (需要安装body插件)
             header: ctx.req.headers
        4. 有能力向客户端返回响应?
            200 : 请求成功
            204 : 成功不用返回数据(删除)
            301 : 永久重定向
            302 : 临时重定向
            304 : 使用协商缓存
            401 : 认证失败(登录认证)
            403 : 权限不通过(拒绝请求)
            404 : 资源找不到
            405 : 方法不允许
            409 : 通不过唯一性约束
            412 : 先决条件失败
            422 : 参数校验不通过
            500 : 服务器错误
            501 : 方法没实现