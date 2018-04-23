const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

app.use(async ctx => {
  //当请求是Get请求时，显示表单让用户填写
  if (ctx.url === '/' && ctx.method === 'GET'){
    let html = `
      <h1>Koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName"><br>
        <p>age</p>
        <input name="age"><br>
        <p>webSite</p>
        <input name="webSite"><br>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html
    //当请求是POST请求时
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    //直接可以用ctx.request.body进行获取POST请求参数,中间件自动给我们作了解析。
    let pastData = ctx.request.body
    ctx.body = pastData
  }else {
    //其他请求页面显示404页面
    ctx.body='<h1>404!</h1>'
  }
})

app.listen(3000,()=>{
  console.log('demo is starting at port 3000')
})