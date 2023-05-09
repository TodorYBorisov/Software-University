const http = require('http');

const server = http.createServer((req, res) => {
    //console.log('HHTP Request');
    //console.log(req.headers); какви са хедърите
    //console.log(req.method); какъв е метода
    //console.log(req.url);  може да видим какъв е url

    res.writeHead(200, {
        'content-type': 'text/html'
    });

    switch (req.url) {
        case '/':
            res.write('<h1>Hello from Node JS!</h1>');
            break;
        case '/cats':
            res.write('Some Cats here');
            break;

        default:
            res.write('Anything else');
            break;
    }

    res.end();
})

server.listen(5000);

console.log('Server is running on port 5000...');