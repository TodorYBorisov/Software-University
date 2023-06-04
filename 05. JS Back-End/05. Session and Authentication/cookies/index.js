const app = require('express')();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', (req, res) => {
    console.log(req.cookies);

    res.cookie('cookieParser', '1');
    res.send('Hello');
});

app.listen(3000);
console.log('Server is listening on a port 3000...');