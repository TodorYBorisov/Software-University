const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello from Node JS server!');
    res.end();
});

server.listen(5000);

console.log('Server is running on port 5000...');