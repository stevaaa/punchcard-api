var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  PassPhrase = require('./api/models/punchCardModel'),
  bodyParser = require('body-parser');

  mongoose.Promise = global.Promise;

  var promise = mongoose.connect('mongodb://heroku_8fk5dmsk:mcmvli65ql2sjvk2g4jn2o370f@ds133328.mlab.com:33328/heroku_8fk5dmsk', {
    useMongoClient: true
  })

	// mongoose.connect('mongodb://localhost/myapp');

// var promise = mongoose.connect('mongodb://localhost/blitz', {
//   useMongoClient: true
// })


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/punchCardRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('PunchCardApi server started on: ' + port);
