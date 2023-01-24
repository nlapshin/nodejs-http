const net = require('net');

const port = 8000;

const server = new net.Server();

server.listen(port, function() {
    console.log(`Server listening for connection requests on socket localhost: ${port}`);
});

server.on('connection', function(socket) {
  socket.setEncoding('utf8');

  socket.on('data', (data) => {
    console.log(data.toString());
    socket.write('HTTP/1.1 200 OK\r\n');
    socket.write('Content-Type: text/plain\r\n');
    socket.write('\r\n');
    socket.write('Hello, World!');
    socket.end();
  });

  socket.on('end', function() {
    console.log('Closing connection with the client');
  });

  socket.on('error', function(err) {
    console.log(`Error: ${err}`);
  });
});

function res() {
  return `
    HTTP/1.1 200 OK\r\n
  `
}


// Content-type: text/html; charset=utf-8\r\n
// Connection: close\r\n


// <!doctype html>\r\n
// <html>\r\n
// <head><title>Hello world</title></head>\r\n
// <body>\r\n
// <h1>Hello world</h1>\r\n
// <img src="http://placecage.com/500/500" alt="">\r\n
// </body>\r\n
// </html>\r\n
