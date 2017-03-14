var mongoose = require('moongoose');

var Schema = mongoose.Schema;

var recentsSchema = mongoose.Schema({
  city: String,
  description: String,
});

var Recents = mongoose.model('Recents', recentsSchema);

module.exports = Recents;