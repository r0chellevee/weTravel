var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var recentsSchema = mongoose.Schema({
  weather: String,
  temp: String,
  city: String
});

var Recent = mongoose.model('Recent', recentsSchema);

module.exports = Recent;