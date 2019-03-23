var express = require('express');
var path = require('path');
var router = express.Router();

var patientDB=require('../model/Patient.js')
var bodyParser = require('body-parser');
var urlencoded=bodyParser.urlencoded({ extended: true });

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var accountSid = 'AC0d8bef4735b4b45382bcf16d72a9e1f8';
var authToken = 'f55989338041e0804a2216d74dd96df4';
var client = require('twilio')(
  accountSid, authToken
);


router.get('/',function (request,response) {
    response.render(path.join(__dirname,'..','/views/index')) ;
});


router.get('/signIn',function (request,response) {
   response.render(path.join(__dirname,'..','/views/login')) ;
});
router.get('/index',function(request,response){
  response.render(path.join(__dirname,'..','/views/index')) ;
});

router.post('/index',urlencoded,function (request,response) {

    if(patientDB.getUsers(request.body.email) === true){
      response.render(path.join(__dirname,'..','/views/index')) ;
    }
    else{
      response.render(path.join(__dirname,'..','/views/login')) ;
    }

});

router.get('/index',function (request,response) {
  console.log("called");
    response.render(path.join(__dirname,'..','/views/index')) ;
});

router.post('/index',urlencodedParser,function (request, response) {
    console.log(request.body);
    var data = request.body;
    client.messages.create({
      from: "+19803191617",
      to: "+1"+data.phone,
      body: "Hi "+ data.firstname+" , Your Appointment for "+data.service+" services is confirmed on "+data.date+" at "+data.time
    }).then((message) => console.log(message.sid));
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
router.get('/blog',function(request,response){
  response.render(path.join(__dirname,'..','/views/blog')) ;
})

module.exports = router
