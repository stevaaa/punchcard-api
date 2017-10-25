'use strict';
var superb = require('superb');
var mongoose = require('mongoose'),
  PassPhrase = mongoose.model('PassPhrase');

var fs = require('fs');
exports.get_pass_phrase = function(req, res)
{
  var obj;
  var result1;
  var result2;
  var result3;
  var result4;
  var obj2;
  // fs.readFile('./api/controllers/req.json', 'utf8', function (err, data) {
  //  if (err) {
  //    throw err;
  //       }
    console.log(req);
    obj = JSON.parse(req);
    console.log(obj.result.action);
    obj2 = (obj.result.action);

      if(obj2 == 'add_item')
   {
     console.log(obj.result.parameters.add_ingredients);
     result1 = obj.result.parameters.add_ingredients;
     result2 = obj.result.parameters.ingredients;
     result3 = obj.result.parameters.unit_weight.amount;
     result4 = obj.result.parameters.unit_weight.unit;
     console.log(result1);
     console.log(result2);
     console.log(result3);
     console.log(result4);
    res.json({
      "speech": "Cool, I have " + result1 + "ed " + result2 + " " + result3 + " " +result4,
      "source": "heroku app",
      "displayText": "",
    });

}
function doSomething (callback) {
    // any async callback invokes callback with response
}

doSomething (function doSomethingAfter(err, result) {
    // process the async result
});
// });
}
