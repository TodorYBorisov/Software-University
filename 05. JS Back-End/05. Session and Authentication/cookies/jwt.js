const app = require('express')();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const secret = 'lwihfvnreiuonvvisdonmiornvrvneiornveor';

app.use(cookieParser());

app.get('/', (req, res) => {

    const token = req.cookies.token;

    if(token){
        const data =jwt.verify(token, secret);
        res.send('Token contents: ' + JSON.stringify(data,null,2));
    }

    res.send('Hello, we are testin jwt!');
});

app.get('/jwt', (req, res) => {

    const payload = {
        username: 'Toshko',
        roles: ['user', 'admin']

    };

    const token = jwt.sign(payload, secret, { expiresIn: '2d' });
    res.cookie('token', token);
    res.send('Token saved');

});



app.listen(3000);