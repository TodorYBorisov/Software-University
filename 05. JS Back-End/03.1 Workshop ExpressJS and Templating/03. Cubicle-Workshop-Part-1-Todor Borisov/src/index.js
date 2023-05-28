const express = require('express');
const app = express();
const port = 3000;

const handlebars = require('express-handlebars');

//добавяме мидълуеър за статичните файлове
app.use(express.static('src/public'));

//настройваме на хендълбарс
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

//настройваме папката да се търси в тази директория
app.set('views', 'src/views');

//тук са ни пътищата
app.get('/', (req, res) => {
    res.render('index');
});


app.listen(port, () => console.log(`Server is listening on port ${port}...`));