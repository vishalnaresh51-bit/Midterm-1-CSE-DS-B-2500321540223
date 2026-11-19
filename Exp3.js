const http = require('http'); 
const server = http.createServer((req, res) => { 
res.statusCode = 200; 
res.setHeader('Content-Type', 'text/plain'); 
res.end('Hello ABES'); 
}); 
server.listen(2000, () => { 
console.log('Server chal raha hai port 2000 par http://localhost:2000'); 
}); 