//Solution 1
const fs = require('fs');
const http = require('http');
http.createServer((req, res) => {
fs.readFile('./img.jpg', (err, data) => {
if (err) throw err;
res.end(data);
});
}).listen(3000, () => console.log('listening on 3000'));



//Solution 2
const fs = require('fs');
const server = require('http').createServer();
server.on('request', (req, res) => {
const src = fs.createReadStream('./img.jpg');
src.pipe(res);
});
server.listen(4000);



//Solution 3
require('http').createServer((req, res) => {
const img = require('fs').createReadStream('./tiles.jpg');
img.pipe(res);
}).listen(5000, () => console.log("listening to 9090"));