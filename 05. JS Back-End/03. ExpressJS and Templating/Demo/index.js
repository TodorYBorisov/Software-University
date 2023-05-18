const express = require('express');
const app = express();

const port = 5000;

//add middleware

app.use((req, res, next) => {
console.log(`HTTP request${req.method}:${req.path}`);
next();
});

//express router/ Actions

app.get('/', (req, res) => {
    res.status(200);
    res.send('Welcome to Express!');


});

app.get('/cats', (req, res) => {
    res.status(201);
    res.send('This age contains cats');

});

app.get('/cats/:catsId', (req, res) => {

    res.send(`Request with parameter - ${req.params.catsId}`);
});

app.get('old-route', (req, res) => {
    res.redirect('/cats')
});
app.listen(port, () => console.log(`Server is running on ${port}...`));

