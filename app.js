const koa = require('koa2')
const cors = require('koa2-cors')
const Router = require('@koa/router')
const mock = require('./mock')
const Mock = require('mockjs')

const router = new Router()
const app = new koa()

app.use(cors())

mock.forEach(item => {
  const { url, method, response } = item
  router[method](url, ctx => {
    console.log(url)
    ctx.body = Mock.mock(response instanceof Function ? response(ctx.request) : response)
  })
})
router.get('/', ctx => ctx.body = 'hello word')
app.use(router.routes())

app.listen('8089', () => {
  console.log('start 8089')
})