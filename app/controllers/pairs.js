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
  // initiator userName = req.body.user_name
  // partner userId = str.split("@")[1].split(">")[0]
  // pair command
  // create a new pair
  var partner = req.body.text.split("<")[1].split(">")[0];
  Swifty.postToUser('<@U23NDM84S>', "you're pairing with @" + req.body.user_name);
  Swifty.postToChannel('dushyant', 'controller: create!');
  res.send({status: "ok"});
};

module.exports = PairsController;
