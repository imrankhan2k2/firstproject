// Sample node.js web app for Pluralsight Docker CI course
// For demonstration purposes only
// Performing the changes to the file one more time.
'use strict';

var express = require('express'),
    app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('home', {
  });
});

app.listen(8070);
module.exports.getApp = app;
