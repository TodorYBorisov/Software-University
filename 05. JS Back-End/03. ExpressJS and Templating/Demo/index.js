const express = require('express');
const app = express(); // правим си инстанция 
const path = require('path');

const handlebars = require('express-handlebars');

const { addCat, getCats } = require('./dataCats');

//Setup Handlebars to Express, как да закачим handlebars view engine

// app.engine('handlebars', handlebars.engine());
// app.set('view engine', 'handlebars');

//Setup Handlebars to Express, как да сменим разширението
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');



//тук добавяме глобален middleware който важи за всички requests

app.use((req, res, next) => {
    console.log(`HTTP request ${req.method}: ${req.path}`);
    next();
});

//custom middleware with validation

app.use('/user/:userId', (req, res, next) => {

    const userId = req.params.userId;
    let userExist = true;

    if (!userExist) {
        res.redirect('/login');
    } else {
        next();
    }

    app.get('/user/userId', (req, res) => {
        res.send('User home page!');
    });
});

//partial middleware /частиче зависи от пътя на заявката

app.use('/cats', (req, res, next) => {
    console.log('Cats middleware');
    next();
});


//Специфичен middleware ,когато имаме get заявка към специфичен път, където слагаме middleware вътре в пътя

const specificmiddleware = (req, res, next) => {
    console.log('Just for specific route only.');
    next();
};

app.get('/specific', specificmiddleware, (req, res) => {
    res.send('Some specific rout with middleware.');
});

//add third-party middleware
//ползваме го ако имаме изпратени данни от форма, да може да парснем данните към обект през req.body, за да ги ползваме

const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);



//middleware за статични файлове от public folder
app.use(express.static('public'));

//=====================================================================//
//От тука надолу е нашия Express router/Actions

//може да си слагаме статус, който да се чейнва
app.get('/', (req, res) => {
    // res.status(200).res.send('Welcome to Express!');
    res.render('home');

});


//подаваме вида ня заявката, след което указваме и пътя и в комбинация с хендлъра се нарича=> ендпоинт
//Action e самия рикуест хендлър
// app.get('/cats', (req, res) => {
//     res.status(200);
//     res.send('This page contains cats');
// });

// връщане на форм дата с боди парсъра
app.get('/cats', (req, res) => {
    const cats = getCats();
    //const firstCat = cats[0]; така се подава само първата котка, а с {cats}подаваме целия масив 

    res.status(200);
    res.render('cats', {cats});
});

app.get('old-route', (req, res) => {
    res.redirect('/cats');
});

app.post('/cats', (req, res) => {
    console.log(req.body);

    addCat(req.body.name, Number(req.body.age));

    res.status(201);
    //res.send('Cat has been created!');
    res.redirect('/cats');
});
app.put('/cats', (req, res) => {
    //res.status(201);
    res.send('This data has been updated!');
});

app.delete('/cats', (req, res) => {
    res.status(200);
    res.send('This data has been deleted!');
});

//тук catsId е променлива/параметър идват като обект
app.get('/cats/:catId', (req, res) => {

    const catId = Number(req.params.catId);
    if (!catId) {
        //задължително му слагане return, за да прекъсне!!!
        return res.status(404).send('Can find resource!');
    }

    const paramsObj = req.params;
    console.log(paramsObj);

    res.send(`Request with parameter - ${paramsObj.catId}`);
});

app.get('/download', (req, res) => {

    res.download('./test.pdf');

    // res.attachment('./test.pdf');
    // res.end();

    //това зарежда файла директно в браузъра направо, но иска path библиотеката
    //  res.sendFile(path.resolve(__dirname, 'test.pdf'));

});

//редиректва от стар път към нов такъв
app.get('/old-route', (req, res) => {
    res.redirect('/cats');
});

app.get('/about', (req, res) => {
    res.render('about');
});


//реда има значение и заради това това се слага най-отдолу и се ползва за някакви общи страници за който не е описан път
//* да отговаря на какво и да било
app.get('*', (req, res) => {
    res.status(404);
    res.send('Not Found');
});


app.listen(5000, () => console.log('Server is listening on port 5000...'));

