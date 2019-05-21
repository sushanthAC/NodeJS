const fs = require('fs');
const zlib = require('zlib');

//Pipe example
// const readStream = fs.createReadStream('chnagedFileName.txt');
// const writeStream = fs.createWriteStream('chnagedFileName2.txt');

// readStream.pipe(writeStream);

const gzip = zlib.createGzip();
const readStream = fs.createReadStream('chnagedFileName.txt');
const writeStream = fs.createWriteStream('chnagedFileName2.txt.gz');

readStream.pipe(gzip).pipe(writeStream);
