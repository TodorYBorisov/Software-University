const http = require('http');

const server = http.createServer((req, res) => {

    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);

    res.write('Hello from Node JS server!');
    res.end();
});

server.listen(5000);

console.log('Server is running on port 5000...');