const fs = require('fs');

fs.writeFile('example.txt', 'this is sample', (error) => {
  if (error)
    console.log(error);
  else {
    console.log('File created successfully..!');
    fs.readFile('example.txt', 'utf8', (error, file) => {
      if (error)
        console.log(error);
      else
        console.log(file);
    });
  }
});

fs.rename('example.txt', 'chnagedFileName.txt', (error) => {
  if (error)
    console.log(error);
  else
    console.log('file name changed...!');
});

fs.appendFile('chnagedFileName.txt', 'this is appended data', (error) => {
  if (error)
    console.log(error)
  else
    console.log('data appened successfully.');
});

fs.unlink('chnagdFileName.txt', (error) => {
  if (error)
    console.log(error);
  else
    console.log('file deleted');
});

fs.mkdir('tutorials', (error) => {
  if (error)
    console.log(error);
  else {
    fs.rmdir('tutorials', (error) => {
      if (error)
        console.log(error);
      else
        console.log('folder deleted..!');
    });
    console.log('Folder created successfully..!');
  }
});

fs.readdir('example', (error, files) => {
  if (error)
    console.log(error);
  else {
    for (let file of files) {
      fs.unlink('example/' + file, (error) => {
        if (error)
          console.log(error);
        else
          console.log('file deleted');
      })
    }
  }
  console.log(files);
});