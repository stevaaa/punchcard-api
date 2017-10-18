'use strict';
module.exports = function(app) {
  var punchCard = require('../controllers/punchCardController');

  //passphrase routes
  app.route('/passphrase')
    .get(punchCard.get_pass_phrase)
  /*  .post(punchCard.create_pass_phrase) */
}
