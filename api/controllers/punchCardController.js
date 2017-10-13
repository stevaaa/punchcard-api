'use strict';
var superb = require('superb');
var mongoose = require('mongoose');

var PassPhrase = mongoose.model('PassPhrase');
var StoreBoy = mongoose.model('StoreBoy');

exports.get_pass_phrase = function(req, res) {
  PassPhrase.find({}, function(err, passphrase){
    if(err)
      res.send(err);
    res.json(passphrase);
  });
};

exports.create_pass_phrase = function(req, res) {
	console.log("------------------");
	console.log(Object.keys(req.body));
	console.log("------------------");
  var new_passphrase = new PassPhrase(req.body);
  new_passphrase.phrase = superb();
  // console.log(new_passphrase);
  new_passphrase.save(function(err, passphrase){
    if(err)
      res.send(err);
    res.json({speech: passphrase.phrase,
      displayText: passphrase.phrase,
      source: 'heroku app'
    });
  });
};

exports.list_storeboy = function(req, res) {
	StoreBoy.find({}, function(err, storeboy){
		console.log(storeboy);
		if(err)
			res.send(err);
		res.json(storeboy);
	});
};

exports.add_storeboy = function(req, res) {
  var new_storeboy = new StoreBoy(req.body);
  new_storeboy.name = superb();
  // console.log(new_passphrase);
  new_storeboy.save(function(err, storeboy){
    if(err)
      res.send(err);
    res.json({name: storeboy.name,
      quantity: storeboy.name,
      source: 'heroku app'
    });
  });
};

// return res.json({
//     speech: speech,
//     displayText: speech,
//     source: 'webhook-echo-sample'
// });
