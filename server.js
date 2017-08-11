var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  PassPhrase = require('./api/models/punchCardModel'),
  bodyParser = require('body-parser');

  mongoose.Promise = global.Promise;

  var promise = mongoose.connect('mongodb://localhost/digitalLab', {
    useMongoClient: true
  })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/punchCardRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('PunchCardApi server started on: ' + port);
