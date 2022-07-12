const https = require('https');
const devcert = require('devcert');

;(async () => {
  await run()
})()

async function run() {
  const certs = await devcert.certificateFor([
    'localhost'
  ]);

  https.createServer(certs, function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
  }).listen(8080);

  console.log('started 8080')
}
