require('dotenv').config();
const http = require('node:http');
const url = require('url');
const fs = require('fs');

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', (req, res) => {
  // 3 if statements to handle
  // else -> 404 file for not found pages
  // res.end() will ignore the leftover code
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if (req.url == '/') {
    fs.readFile('./src/index.html', (err, data) => {
      res.write(data);
      return res.end();
    });
  }
  if (req.url == '/about') {
    fs.readFile('./src/about.html', (err, data) => {
      res.write(data);
      return res.end();
    });
  }
  if (req.url == '/contact-me') {
    fs.readFile('./src/contact-me.html', (err, data) => {
      res.write(data);
      return res.end();
    });
  }

  fs.readFile('./src/404.html', (err, data) => {
    res.write(data);
    return res.end();
  });
});

server.listen(8080, () => {
  console.log('server is listening');
});
