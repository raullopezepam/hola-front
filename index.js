const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola desde el frontend en Kubernetes!\n');
});
server.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
