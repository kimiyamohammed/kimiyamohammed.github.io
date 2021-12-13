let http= require('http');
http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Quiz</title></head>');
    res.write('<body><h1>Welcome to CS472</h1></body>');
    res.write('</html>');
    req.url = '/abc'
    res.end();
}).listen(9090,"127.0.0.1");
