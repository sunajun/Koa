const Koa = require('koa')
const app = new Koa()
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
    //ctx.body = '接收到请求'
    let pastData = await parsePostData(ctx)
    ctx.body = pastData
  }else {
    //其他请求页面显示404页面
    ctx.body='<h1>404!</h1>'
  }
})

//解析Node原生POST参数
function parsePostData(ctx){
  return new Promise((resolve,reject) => {
    try{
      let postdata = ''
      ctx.req.on('data',(data)=>{ //ctx.req:是context提供的node.js原生HTTP请求对象。
        postdata +=data
      })
      ctx.req.addListener('end',function () {
        let parseData = parseQueryStr(postdata)
        resolve(parseData)
      })
    }catch (error) {
      reject(error)
    }
  })
}

//POST字符串解析JSON对象
function parseQueryStr(queryStr){
  let queryData = {}
  let queryList = queryStr.split('&')
  console.log(queryList)
  for ( let [index,queryStr] of queryList.entries()){
    let itemList = queryStr.split('=')
    console.log(itemList)
    queryData[itemList[0]] = decodeURIComponent(itemList[1])
  }
  return queryData
}

app.listen(3000,()=>{
  console.log('demo is starting at port 3000')
})