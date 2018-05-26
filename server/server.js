const express = require('express');
const path = require('path');
const parser = require('body-parser');
const helper = require('./fetchHelper')
const app = express();

app.use(express.static(path.join(__dirname + '/../dist')));
app.use(parser.text());

app.post('/server', (req, res) => {
  helper(req.body).then(res => {
    console.log(res)
  })
})

app.listen(3000, () => console.log('HELLO!'));