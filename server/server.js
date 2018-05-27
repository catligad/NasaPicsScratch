const express = require('express');
const path = require('path');
const parser = require('body-parser');
const helper = require('./getHelper')
const app = express();

app.use(express.static(path.join(__dirname + '/../dist')));
app.use(parser.text());

app.post('/server', (req, res) => {
  helper(req.body).then(res => {
    // console.log(res.data.collection.items[0].links[0].href)
    for (let i = 0; i < res.data.collection.items.length; i++) {
      const image = res.data.collection.items[i].links[0].href;



    }
  })
  res.send({result: 'I got you boo'})
})

app.listen(3000, () => console.log('HELLO!'));