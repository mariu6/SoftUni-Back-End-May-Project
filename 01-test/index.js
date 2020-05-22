// const http = require('http');

// http.createServer((req, res) => {
//   res.write('Hi!');
//   res.end();
// }).listen(1337);

// console.log('Node.js server running on port 1337');
// //  http://localhost:1337/



const http = require('http');
const url = require('url');
const port = 1337;

http.createServer((req, res) => {
  let path = url.parse(req['url']).pathname;
  if (path === '/') {
    // TODO: Send 'Welcome to home page!'
    res.write('Welcome to home page!');
    res.end();
  } else if (path === '/login') {
    // TODO: Send 'Welcome to home page!'
    res.write('Welcome to login page!');
    res.end();
  } else if (path === '/logout') {
    // TODO: Send 'Welcome to home page!'
    res.write('Logout successfully!');
    res.end();
  } else {
    // TODO: Send 'Welcome to home page!'
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
