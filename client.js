const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  // conn.on('connect', () => {
  //   conn.write(data);
  // })
  // allows us to receive messages back from server
  conn.on('data', (data) => { 
    console.log('New message from the server:', data)
  })
  return conn;
}

module.exports = connect;