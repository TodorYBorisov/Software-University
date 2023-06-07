const handlebars = require('express-handlebars');

function handlebarsConfigurator(app) {
    //настройваме на хендълбарс
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

//настройваме папката да се търси в тази директория
app.set('views', 'src/views');
    
}
module.exports = handlebarsConfigurator;