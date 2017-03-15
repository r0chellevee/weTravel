var data = require('./recentSearch.js');
var db = require('./app/config.js');
var Search = require('./models/recent.js');

var saveRecent = function(recent) {
  var search = new Search(recent);
  search.save(function(err, search) {
    if (err) {
      return console.log('These are not the droids you\'re looking for: ', err);
    } else {
      console.log('You rock, Rocky!', search);
    }
  });
};

var recentsList = function(searches) {
  searches.forEach(search => {
    saveRecent(search);
  });
};

recentsList(data);