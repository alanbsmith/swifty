require('dotenv').config();
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var controllers = require('./app/controllers/index');
var Swifty = require('./app/services/swifty');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.post('/pairs/', controllers.pairs.index)

app.post('/pairs/create', controllers.pairs.create);


app.post('/feedback', function(req,res) {
  console.log(req.query);
  // this is admittedly gross, but...
  var pairPartner = req.query.text.split("@")[1].split(" ")[0];
  var pairInitiater = req.query.user_name;
  console.log(pairPartner, pairInitiater);
  Swifty.postToUser(pairPartner,  pairInitiater + " said they were pairing with you! Have fun!");
  Swifty.postToUser(pairInitiater, "your pairing session has been logged. Be cool to " + pairPartner);
});

var server = app.listen(PORT, function() {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
});
