const express = require('express');
const path = require('path');
const parser = require('body-parser');
const helper = require('./getHelper');
const mongo = require('./mongo');
const _ = require('lodash');
const app = express();

app.use(express.static(path.join(__dirname + '/../dist')));
app.use(parser.text());

app.post('/server', (req, res) => {
  helper(req.body).then( result => {
    var promises = [];
    for (let i = 0; i < result.data.collection.items.length; i++) {
      const link = result.data.collection.items[i].links[0].href;
      promises.push(mongo.saveAndFind(link));
    }
    Promise.all(promises)
      .then( (val) => {
        const dataToReturn = _.flatten(val);
        res.send({results: dataToReturn});
      })
      .catch(err => console.log(err));
  })
});

app.get('/server', (req, res) => {
  mongo.find()
    .exec((err, val) => {
      res.send({results: val})
    });
})

app.listen(3000, () => console.log('HELLO!'));