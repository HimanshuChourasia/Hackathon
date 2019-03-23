var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/signIn',function (request,response) {
   response.render(path.join(__dirname,'..','/views/login')) ;
});

router.get('/signIn',function (request,response) {
    response.render(path.join(__dirname,'..','/views/login')) ;
});

module.exports = router ;


