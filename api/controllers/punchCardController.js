'use strict';
var superb = require('superb');
var mongoose = require('mongoose'),
  PassPhrase = mongoose.model('PassPhrase');

exports.get_pass_phrase = function(req, res) {
  PassPhrase.find({}, function(err, passphrase){
    if(err)
      res.send(err);
    res.json(passphrase);
  });
};

exports.create_pass_phrase = function(req, res) {
  var new_passphrase = new PassPhrase(req.body);
  new_passphrase.phrase = superb();
  // console.log(new_passphrase);
  new_passphrase.save(function(err, passphrase){
    if(err)
      res.send(err);
    res.json(passphrase);
  });
};
