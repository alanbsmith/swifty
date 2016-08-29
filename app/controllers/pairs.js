var Swifty = require('../services/swifty');
var PairsController = {};

PairsController.index = function(req, res) {
  // list command
  // should return a list of all the pairs
  Swifty.postToChannel('swiftly', 'pair controller: index!');
  res.send({status: "ok"});
};

PairsController.create = function(req, res) {
  // pair command
  // create a new pair
  Swifty.postToChannel('swiftly', 'pair controller: create!');
  res.send({status: "ok"});
};

module.exports = PairsController;
