var mongoose = require('mongoose');

mongoURI = 'mongodb://localhost/wetrvl';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'you done messed up: '));
db.once('open', function() {
  console.log('Mongodb is a go! Hooray!')
})

module.exports = db;
