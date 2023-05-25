const fs = require('fs');

const writeStream = fs.createWriteStream('./output.txt', { encoding: 'utf-8' });

writeStream.write('Chunk 1 \n');
writeStream.write('Chunk 2 \n');
writeStream.write('Chunk 3 \n');
writeStream.write('Chunk 4 \n');
writeStream.end();
