var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nasa');
var db = mongoose.connection;
db.on('err', console.error.bind(console, 'we errored on the mongo side :('))
db. once('open', () => {console.log('we made it!')});

var imageSchema = mongoose.Schema({
  link: {type: String, unique: true}
});

var Image = mongoose.model('Image', imageSchema);

var saveAndFind = (link) => {
  const nasaImg = new Image();
  const data = {link: link};
  Image.findOneAndUpdate(data, data, {upsert: true});
  return Image.find(data);
}

var find = () => {
  return Image.find({});
}

module.exports.saveAndFind = saveAndFind;
module.exports.find = find;

