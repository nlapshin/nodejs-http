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
