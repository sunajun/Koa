const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router.get('/',function (ctx,next) {
  ctx.body = ctx.query //接收参数
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000,()=>{
  console.log('starting at 3000')
})