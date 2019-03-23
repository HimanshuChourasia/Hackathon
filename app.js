var express = require('express');
var app = express();
var router = require('./controller/route');
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
app.use('/',router);
app.listen(8080);
