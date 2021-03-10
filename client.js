const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });

  conn.on('connect', (connect) => {
    console.log("Connection Established Successfully");
  });

  conn.on('connect', () => {
    conn.write('Name: CKC');
  })

  conn.setEncoding('utf8'); 

  conn.on('data', (data) => { 
    console.log('New message from the server:', data)
  })
  return conn;
}

module.exports = connect;