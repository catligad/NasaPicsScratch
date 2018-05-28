const express = require('express');
const path = require('path');
const parser = require('body-parser');
const helper = require('./getHelper');
const _saveAndFind = require('./mongo');
const _ = require('lodash');
const app = express();

app.use(express.static(path.join(__dirname + '/../dist')));
app.use(parser.text());

app.post('/server', (req, res) => {
  helper(req.body).then( result => {
    var promises = [];
    for (let i = 0; i < result.data.collection.items.length; i++) {
      const link = result.data.collection.items[i].links[0].href;
      promises.push(_saveAndFind(link));
    }
    Promise.all(promises)
      .then( (val) => {
        const dataToReturn = _.flatten(val);
        res.send({results: dataToReturn});
      })
      .catch(err => console.log(err));
  })
})

app.listen(3000, () => console.log('HELLO!'));