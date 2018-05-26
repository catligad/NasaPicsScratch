const express = require('express');
const path = require('path');
const parser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname + '/../dist')));

app.post('/server', (req, res) => {
  res.send({result:'I got you boo'});
})

app.listen(3000, () => console.log('HELLO!'));