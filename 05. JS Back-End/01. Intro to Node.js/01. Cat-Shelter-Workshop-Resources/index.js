const http = require('http');
const { homeTemplate, catTemplate } = require('./resources/views/home/index');
const siteCss = require('./resources/content/styles/site');
const addBreedHTML = require('./resources/views/addBreed');
const addCatHTML = require('./resources/views/addCat');


const cats = [
    {
        id: '1',
        name: 'Cat1',
        breed: 'Breed1',
        description: 'Description for cat 1'
    },
    {
        id: '2',
        name: 'Cat2',
        breed: 'Breed2',
        description: 'Description for cat 2'
    },
    {
        id: '3',
        name: 'Cat3',
        breed: 'Breed3',
        description: 'Description for cat 3'
    }
];

const server = http.createServer(async (req, res) => {
    const url = req.url; // взимаме url
    console.log(url);

    if (url == '/') {

        const catsHTML = cats.map(cat => catTemplate.replace('{{name}}', cat.name));
        const homeHTML = homeTemplate.replace('{{cats}}', catsHTML);

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