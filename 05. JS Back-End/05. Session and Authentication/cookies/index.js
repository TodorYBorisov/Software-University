const app = require('express')();
app.get('/', (req, res) => {

    res.send('Hello');
});

app.listen(3000);
console.log('Server is listening on a port 3000...');