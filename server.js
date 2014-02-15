//server.js

// modules =====================================
var express = require("express");
var app = express();
var mongoose = require("mongoose");

var db = require('./config/db');

var port = process.env.PORT || 8000;
// mongoose.connect(db.url)

// config =======================================

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
});

// routes =======================================
require('./app/routes')(app);

// start app ====================================
app.listen(port);
console.log("Listening on port" + port);
exports = module.exports = app;
