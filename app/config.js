var mongoose = require('mongoose');

mongoURI = "mongodb://<dbuser>:<dbpassword>@ds129610.mlab.com:29610/wetrvl";
mongoose.connect(mongoURI);

var db = mongoose.connection;

module.exports = db;