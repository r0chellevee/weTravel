var Uni = require('./models/unicorn');

module.exports = function(app) {

//sample api route
  app.get('/api/unicorns', function(req, res) {
    //use mongoose to get all unicorns in the database
    Uni.find(function(err, unicorns) {
      if (err) {
        res.send('Error ' + err);
      } else {
        res.json(unicorns);
      }
    });
  });

  //route to handle angular reqs 
  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html');
  });

};