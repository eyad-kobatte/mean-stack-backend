const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const data = { name: 'Eyad' };
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
});

server.listen(3000);
