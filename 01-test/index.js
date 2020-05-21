// const http = require('http');

// http.createServer((req, res) => {
//   res.write('Hi!');
//   res.end();            // важно е да се сложи, за да приключи респонса.
// }).listen(1337);

// console.log('Node.js server running on port 1337');
// //  http://localhost:1337/



const http = require('http');
const url = require('url');
const port = 1337;

http.createServer((req, res) => {
  let path = url.parse(req['url']).pathname;
  if (path === '/') {
    res.write('Welcome to home page!');
    res.end();
  } else if (path === '/login') {
    res.write('Welcome to login page!');
    res.end();
  } else {
    res.write('Error page 404!');
    res.end();
  }
}).listen(port);
//  http://localhost:1337/


// const http = require('http');
// const port = 3000;

// http.createServer((req, res) => {
//   res.writeHead(200, { // Response Status Code
//     'Content-Type': 'text/plain'
//   }); 
//   res.write('Hello from Node.js'); // UTF-8 Encoding
//   res.end(); // Always End the Response
// }).listen(port);
// //  http://localhost:3000/
