const http = require('http');
const router = require('find-my-way')()

router.on('GET', '/', (req, res, params) => {
  res.end('{"message":"hello world"}')
})

router.on('GET', '/route', (req, res, params) => {
  res.end('{"message":"hello route"}')
})

router.on('GET', '/prefix/:id', (req, res, params) => {
  res.end(`{"message":hello ${params.id}"}`)
})



const server = http.createServer((req, res) => {
  router.lookup(req, res)
})

server.listen(8080, err => {
  if (err) throw err
  console.log('Server listening on: http://localhost:8080')
})
