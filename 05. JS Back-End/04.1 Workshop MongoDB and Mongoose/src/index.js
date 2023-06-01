const express = require('express');

const app = express();
const port = 3000; //тук трябва да сменим порта на аппа

const expressConfigurator = require('./config/express');
const handlebarsConfigurator = require('./config/handlebars');
const conectDB = require('./config/dbConfig');
const routes = require('./config/routes');

const Cube = require('./models/Cube');

expressConfigurator(app);
handlebarsConfigurator(app);

conectDB()
    .then(() => console.log('DB is connected succesfuly'))
    .catch(err => console.log('DB error', err));

app.use(routes);

app.listen(port, () => console.log(`Server is listening on port ${port}...`));