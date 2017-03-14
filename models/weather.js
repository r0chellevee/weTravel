var mongoose = require('moongoose');

var Schema = mongoose.Schema;

var weTrvlSchema = new Schema({
  city: String,
  description: String,
});

var Weather = mongoose.model('Weather', weTrvlSchema);

modeule.exports = Weather;