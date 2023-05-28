const express = require('express');
const app = express();
const port = 3000;

const expressConfigurator = require('./config/express');
const handlebarsConfigurator = require('./config/handlebars');
const homeController = require('./controllers/homeController');

expressConfigurator(app);
handlebarsConfigurator(app);

app.use(homeController);


app.listen(port, () => console.log(`Server is listening on port ${port}...`));