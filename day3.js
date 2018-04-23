const Koa = require('koa')
const app = new Koa()
app.use(async ctx =>{
  let url = ctx.url
  //从request中获取get请求
  let request = ctx.request
  let req_query = request.query  //query：返回的是格式化好的参数对象。
  let req_querystring = request.querystring  //querystring：返回的是请求字符串。
  //从上下文中年直接获取
  let ctx_query = ctx.query
  let ctx_querystring = ctx.querystring
  ctx.body = {url,req_query,req_querystring,ctx_query,ctx_querystring}
});
app.listen(3000,()=>{
  console.log('demo is starting at port 3000')
})