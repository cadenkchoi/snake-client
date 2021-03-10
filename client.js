const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
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

module.exports = { connect };