//Create server here!
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');




app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json '}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


var port = process.env.PORT || 8080;
app.listen(port);

console.log('Unicorns exist on port ' + port);

exports = module.exports = app;



