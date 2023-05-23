const http = require('http');
const homeHTML = require('./resources/views/home/index');
const siteCss = require('./resources/content/styles/site');
const addBreedHTML = require('./resources/views/addBreed');
const addCatHTML = require('./resources/views/addCat');

const server = http.createServer((req, res) => {
    const url = req.url; // взимаме url
    console.log(url);

    if (url == '/') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(homeHTML);

    } else if (url == '/content/styles/site.css') {
        res.writeHead(200, { 'Content-type': 'text/css' });
        res.write(siteCss);
    } else if (url == '/cats/add-breed') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(addBreedHTML);
    } else if (url == '/cats/add-cats') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(addCatHTML);
    }

    res.end();



});
server.listen(5000);
console.log('Server is running on port 5000...');