const express = require('express');
const app = express(); // правим си инстанция 
const path = require('path');


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

const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);



//middleware за статични файлове от public folder
app.use(express.static('public'));

//=====================================================================//
//От тука надолу е нашия Express router/Actions

//може да си слагаме статус, който да се чейнва
app.get('/', (req, res) => {
    res.status(200).res.send('Welcome to Express!');
});


//подаваме вида ня заявката, след което указваме и пътя и в комбинация с хендлъра се нарича=> ендпоинт
//Action e самия рикуест хендлър
// app.get('/cats', (req, res) => {
//     res.status(200);
//     res.send('This page contains cats');
// });

// връщане на форм дата с боди парсъра
app.get('/cats', (req, res) => {
    res.status(200);
    res.send(`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/style.css">
    <title>Test page</title>
</head>

<body>

    <form method="post">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" />
        <label for="age">Age</label>
        <input type="number" name="age" id="age" />
        <input type="submit" value="Create" />
    </form>

</body>

</html>
    `);
});

app.get('old-route', (req, res) => {
    res.redirect('/cats');
});

app.post('/cats', (req, res) => {
    console.log(req.body);
    res.status(201);
    res.send('Cat has been created!');
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


//реда има значение и заради това това се слага най-отдолу и се ползва за някакви общи страници за който не е описан път
//* да отговаря на какво и да било
app.get('*', (req, res) => {
    res.status(404);
    res.send('Not Found');
});


app.listen(5000, () => console.log('Server is listening on port 5000...'));

