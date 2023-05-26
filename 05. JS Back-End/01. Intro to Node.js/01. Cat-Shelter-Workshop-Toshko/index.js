const http = require('http');
const fs = require('fs/promises');

//Правим си нещо като база с котките
const cats = [
    {
        id: '1',
        name: 'Cat1',
        breed: 'Breed1',
        description: 'Description for cat 1',
        imgURL: 'https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg'
    },
    {
        id: '2',
        name: 'Cat2',
        breed: 'Breed2',
        description: 'Description for cat 2',
        imgURL: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg'
    },
    {
        id: '3',
        name: 'Cat3',
        breed: 'Breed3',
        description: 'Description for cat 3',
        imgURL: 'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324'
    }
];


//Util функция за заместване на данни в html
const replaceData = (html, data) => {
    return Object.keys(data).reduce((result, key) => {
        result = result.replace(`{{${key}}}`, data[key]);
        return result;
    }, html);
};


const server = http.createServer(async (req, res) => {
    const url = req.url; // взимаме url
    console.log(url);

    if (url == '/') {
        const homeHtml = await fs.readFile('./views/home/index.html', 'utf-8');
        const catHtml = await fs.readFile('./views/cat.html', 'utf-8');

        const catsHtml = cats.map(cat => replaceData(catHtml, cat));

        //const homeResult = homeHtml.replace('{{cats}}', catsHtml);
        const homeResult = replaceData(homeHtml, {cats: catsHtml});

        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(homeResult);

    } else if (url == '/content/styles/site.css') {
        const siteCss = await fs.readFile('./content/styles/site.css', 'utf-8');
        res.writeHead(200, { 'Content-type': 'text/css' });
        res.write(siteCss);

    } else if (url == '/cats/add-breed') {
        const addBreedHtml = await fs.readFile('./views/addBreed.html', 'utf-8');
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(addBreedHtml);

    }

    res.end();
});
server.listen(5000);
console.log('Server is running on port 5000...');