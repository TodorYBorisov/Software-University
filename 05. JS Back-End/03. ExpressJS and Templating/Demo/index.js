const express = require('express');
const app = express(); // правим си инстанция 


//add middleware

app.use((req, res, next) => {
    console.log(`HTTP request${req.method}:${req.path}`);
    next();
});

//express router/ Actions

//може да си слагаме статус, който да се чейнва
app.get('/', (req, res) => {
    res.status(200).res.send('Welcome to Express!');
});

//подаваме вида ня заявката, след което указваме и пътя и в комбинация с хендлъра се нарича=> ендпоинт
//Action e самия рикуест хендлър
app.get('/cats', (req, res) => {
    res.status(200);
    res.send('This page contains cats');
});

app.get('/cats/:catsId', (req, res) => {

    res.send(`Request with parameter - ${req.params.catsId}`);
});

app.get('old-route', (req, res) => {
    res.redirect('/cats');
});

app.post('/cats', (req, res) => {
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

//реда има значение и заради това това се слага най-отдолу и се ползва за някакви общи страници за който не е описан път
//* да отговаря на какво и да било
app.get('*', (req, res) => {
    res.status(404);
    res.send('Not Found');
});


app.listen(5000, () => console.log('Server is listening on port 5000...'));

