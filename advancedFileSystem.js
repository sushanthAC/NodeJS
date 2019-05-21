const fs = require('fs');
const readStream = fs.createReadStream('chnagedFileName.txt');
const writeStream = fs.createWriteStream('chnagedFileName2.txt', 'utf8');

readStream.on('data', (chunk) => {
  if (chunk) {
    writeStream.write(chunk);
  }
});