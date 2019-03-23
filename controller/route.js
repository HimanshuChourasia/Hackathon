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

router.get('/appointment',function (request,response) {
    response.render(path.join(__dirname,'..','/views/appointment')) ;
});

router.get('/doctor',function (request,response) {
    response.render(path.join(__dirname,'..','/views/doctor')) ;
});

router.get('/department',function (request,response) {
    response.render(path.join(__dirname,'..','/views/department')) ;
});

router.get('/pricing',function (request,response) {
    response.render(path.join(__dirname,'..','/views/pricing')) ;
});

router.get('/contact',function (request,response) {
    response.render(path.join(__dirname,'..','/views/contact')) ;
});


router.get('/blog',function (request,response) {
    response.render(path.join(__dirname,'..','/views/blog')) ;
});


module.exports = router ;


