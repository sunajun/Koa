 async function testAsync() {
   return 'Hello async'
 }//返回的是Promise
 const result = testAsync()
 console.log(result)

 console.log('----------------------')
 function getSomething() {
   return 'something'
 }

 async function getAsync() {
   return 'Hello Async'
 }

 //await一般在等待async方法执行完毕，但是其实await等待的只是一个表达式，这个表达式在官方文档里说的是Promise对象，可是它也可以接受普通值。
 async function test() {
   const v1 = await getSomething()
   const v2 = await getAsync()
   console.log(v1,v2)
 }
 test()

 function takeLongTime() {
   return new Promise(resolve => {
     setTimeout(()=>{
       resolve('long_time_value')
     },2000)
   })
 }
 async function test1() {
   const v = await takeLongTime()
   console.log(v)
 }
 test1()