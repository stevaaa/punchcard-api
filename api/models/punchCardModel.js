'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PassPhraseSchema = new Schema({
  streamName: String,
  createdBy: String,
  meetupType: String,
  duration: Number,
  phrase: String,
  createdData: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PassPhrase', PassPhraseSchema);
