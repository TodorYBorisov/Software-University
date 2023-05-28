const express = require('express');
const app = express();
const port = 3000;

const expressConfigurator = require('./config/express');
const handlebarsConfigurator = require('./config/handlebars');

expressConfigurator(app);
handlebarsConfigurator(app);


//тук са ни пътищата
app.get('/', (req, res) => {
    res.render('index');
});


app.listen(port, () => console.log(`Server is listening on port ${port}...`));