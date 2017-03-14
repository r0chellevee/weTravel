var mongoose = require('mongoose');

mongoURI = 'mongodb://<test>:<test>@ds129610.mlab.com:29610/wetrvl';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error(.bind(console, 'you done messed up: '));
db.once('open', function() {
  console.log('Mongodb is a go! Hooray!')
})

module.exports = db;

