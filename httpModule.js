const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello this is node JS server');
    res.end();
  } else {
    res.write('Other page');
    res.end();
  }
});

server.listen('3000');