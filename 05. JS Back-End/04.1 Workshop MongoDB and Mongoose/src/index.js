const express = require('express');
const app = express();
const port = 3000;

const expressConfigurator = require('./config/express');
const handlebarsConfigurator = require('./config/handlebars');
const routes = require('./config/routes');


expressConfigurator(app);
handlebarsConfigurator(app);

app.use(routes);




app.listen(port, () => console.log(`Server is listening on port ${port}...`));