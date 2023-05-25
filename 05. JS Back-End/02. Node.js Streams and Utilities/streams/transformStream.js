const fs = require('fs');
const zlib = require('zlib');

const gzib = zlib.createGzip();

const readStream = fs.createReadStream('./input.txt');
const writeStream = fs.createWriteStream('./output.txt');

//по този начин трансформираме всяко парче от данни
readStream.pipe(gzib).pipe(writeStream);