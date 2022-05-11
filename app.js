// agregar en una variable el modulo nativo de node llamado htttp
const http = require('http');

// crear una variable hostname 127.0.0.1 
const hostname = '127.0.0.1';

// crear una variable y agregar el puerto a usar
const port = 3000;

// crear el servidor usando el modulo http y el metodo createServer()
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.end('<p>Hello Stranger</p>');
});

// llamar el servidor y agregarle el metodo listen()
server.listen(port, hostname, () => {
  console.log(`El servidor esta funcionando en: http://${hostname}:${port}/`);
});


