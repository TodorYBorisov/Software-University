const fs = require('fs');

// библиотека за оправяне на пътищата при четене на файлове от системата
const path = require('path');


const readStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'));
const writeStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'));

readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});

//Когато вече нямаме данни за четене затваряме стрийма
readStream.on('end', () => {
    writeStream.end();
});