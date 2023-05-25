const fs = require('fs');

const data = 'Prosot test';

fs.writeFile('./output.txt', data, 'utf-8', (err) => {

    if (err) {
        console.log('Errorr');
        return;
    }
    console.log('Succesfully saved file');
});