const express = require('express');

const expressConfig = require('./config/expressConfig');
const databaseConfig = require('./config/databaseConfig');
const routesConfig = require('./config/routesConfig');

const port = 3000; //тук да сме смени порта 

async function start() {
    const app = express();
    
    expressConfig(app);
    await databaseConfig(app);
    routesConfig(app);
    
    app.listen(port, () => console.log(`Server is listenig on port ${port}...`));
}
start();