const fs = require('fs');

const readStream = fs.createReadStream('./streams/input.txt');
const writeStream = fs.createWriteStream('./streams/output.txt');

readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});

//Когато вече нямаме данни за четене затваряме стрийма
readStream.on('end', () => {
    writeStream.end();
});