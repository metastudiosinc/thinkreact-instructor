var express = require('express');
var path = require('path');

var app = express();

var staticPath = path.join(__dirname, '/views');

app.use('/', express.static(staticPath));
app.listen(3000, function() { console.log('listening')});
