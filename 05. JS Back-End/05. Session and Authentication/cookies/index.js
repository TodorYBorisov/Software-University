const http = require('http');

const server = http.createServer((req, res) => {

    const cookies = cookieParser(req);
    if (req.url == '/') {

        let visited = 0;
        visited++;

        res.writeHead(200, {
            'Set-Cookie': `visited=${visited}; httpOnly`
        });
        res.write('Hello');
        res.end();
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000...');
});

function action(req,res) {
    const cookies = cookieParser(req);
    if (req.url == '/') {

        let visited = 0;
        visited++;

        res.writeHead(200, {
            'Set-Cookie': `visited=${visited}; httpOnly`
        });
        res.write('Hello');
        res.end();
}

function cookieParser(req) {

    if (req.headers.cookie) {
        const cookies = Object.fromEntries(req.headers.cookie
            .split(';')
            .map(c => c.trim())
            .map(c => c.split('=')));

        console.log(cookies);

        return cookies;
    }

    return {};

}