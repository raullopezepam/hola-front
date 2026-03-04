const http = require('http');

// Aquí le decimos a Node: "Busca una variable llamada SALUDO_USER"
// Si no la encuentras, usa el texto por defecto.
const saludo = process.env.SALUDO_USER || "Hola (sin variable aún)";

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`${saludo}\n`);
});

server.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
