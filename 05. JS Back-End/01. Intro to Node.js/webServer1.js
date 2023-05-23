const http = require('http');

const server = http.createServer((req, res) => {

    console.log(req.headers.host);
    console.log(req.method);
    console.log(req.url);

    res.writeHead(201, {
        'Content-type': 'text/html'
    });

    res.write('Hello from Node JS server!');
    res.end();
});

server.listen(5000);

console.log('Server is running on port 5000...');