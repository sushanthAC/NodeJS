const express = require('express');
const path = require('path');

const app = express();
app.use('/public', express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/example', (req, res) => {
  res.send('Hitting example route');
});

app.get('/student/:name/:age', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send('Student Name is ' + req.params.name + ' - ' + req.params.age);
});

app.listen(3000);