var Swifty = require('../services/swifty');
var PairsController = {};

PairsController.index = function(req, res) {
  console.log(req.body)
  // list command
  // should return a list of all the pairs
  Swifty.postToChannel('swiftly', 'controller: index!');
  res.send({status: "ok"});
};

PairsController.create = function(req, res) {
  console.log(req.body)
  // pair command
  // create a new pair
  Swifty.postToChannel('swiftly', 'controller: create!');
  res.send({status: "ok"});
};

module.exports = PairsController;
