var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/',function (request,response) {
    response.render(path.join(__dirname,'..','/views/index')) ;
});


router.get('/signIn',function (request,response) {
   response.render(path.join(__dirname,'..','/views/login')) ;
});

router.get('/index',function (request,response) {
    response.render(path.join(__dirname,'..','/views/index')) ;
});

router.get('/about',function (request,response) {
    response.render(path.join(__dirname,'..','/views/about')) ;
});

module.exports = router ;


