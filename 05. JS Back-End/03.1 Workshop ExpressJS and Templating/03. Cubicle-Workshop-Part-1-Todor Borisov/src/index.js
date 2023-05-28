const express = require('express');
const app = express();
const port = 5000;

const handlebars = require('express-handlebars');

//настройка на хендълбарс
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.send('Test');
});

app.listen(port, () => console.log(`Server is listening on port ${port}...`));