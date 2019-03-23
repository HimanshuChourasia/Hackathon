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
  if(request.session.theUser===true){
    response.render(path.join(__dirname,'..','/views/index'),{flag:true}) ;
  }
  else{
    response.render(path.join(__dirname,'..','/views/index'),{flag:false}) ;
  }
});


router.get('/signIn',function (request,response) {
   response.render(path.join(__dirname,'..','/views/login')) ;
});
router.get('/index',function(request,response){
  if(request.session.theUser===true){
    response.render(path.join(__dirname,'..','/views/index'),{flag:true}) ;
  }
  else{
    response.render(path.join(__dirname,'..','/views/index'),{flag:false}) ;
  }

});

router.post('/index',urlencoded,function (request,response) {
  var data = request.body;
  client.messages.create({
    from: "+19803191617",
    to: "+1"+data.phone,
    body: "Hi "+ data.firstname+" , Your Appointment for "+data.service+" services is confirmed on "+data.date+" at "+data.time
  }).then((message) => console.log(message.sid));

    if(patientDB.getUsers(request.body.email) === true){
      request.session.theUser=true;
      response.render(path.join(__dirname,'..','/views/index'),{flag:request.session.theUser}) ;
    }
    else{
      response.render(path.join(__dirname,'..','/views/login')) ;
    }

});

router.get('/index',function (request,response) {
  console.log("called");
  if(request.session.theUser===true){
    response.render(path.join(__dirname,'..','/views/index'),{flag:true}) ;
  }
  else{
    response.render(path.join(__dirname,'..','/views/index'),{flag:false}) ;
  }
});

/*router.post('/index',urlencodedParser,function (request, response) {
    console.log(request.body);
    var data = request.body;
    client.messages.create({
      from: "+19803191617",
      to: "+1"+data.phone,
      body: "Hi "+ data.firstname+" , Your Appointment for "+data.service+" services is confirmed on "+data.date+" at "+data.time
    }).then((message) => console.log(message.sid));
    response.render(path.join(__dirname,'..','/views/index')) ;

});*/

router.get('/about',function (request,response) {
  if(request.session.theUser===true){
    response.render(path.join(__dirname,'..','/views/about'),{flag:true}) ;
  }
  else{
    response.render(path.join(__dirname,'..','/views/about'),{flag:false}) ;
  }

});

router.get('/appointment',function (request,response) {
  if(request.session.theUser===true){
    response.render(path.join(__dirname,'..','/views/appointment'),{flag:true}) ;
  }
  else{
    response.render(path.join(__dirname,'..','/views/appointment'),{flag:false}) ;
  }
});

router.get('/doctor',function (request,response) {
  if(request.session.theUser===true){
    response.render(path.join(__dirname,'..','/views/doctor'),{flag:true}) ;
  }
  else{
    response.render(path.join(__dirname,'..','/views/doctor'),{flag:false}) ;
  }
});

router.get('/department',function (request,response) {
  if(request.session.theUser===true){
    response.render(path.join(__dirname,'..','/views/department'),{flag:true}) ;
  }
  else{
    response.render(path.join(__dirname,'..','/views/department'),{flag:false}) ;
  }
});

router.get('/pricing',function (request,response) {
  if(request.session.theUser===true){
    response.render(path.join(__dirname,'..','/views/pricing'),{flag:true}) ;
  }
  else{
    response.render(path.join(__dirname,'..','/views/pricing'),{flag:false}) ;
  }
});

router.get('/contact',function (request,response) {
  if(request.session.theUser===true){
    response.render(path.join(__dirname,'..','/views/contact'),{flag:true}) ;
  }
  else{
    response.render(path.join(__dirname,'..','/views/contact'),{flag:false}) ;
  }
});
router.get('/blog',function(request,response){
  if(request.session.theUser===true){
    response.render(path.join(__dirname,'..','/views/blog'),{flag:true}) ;
  }
  else{
    response.render(path.join(__dirname,'..','/views/blog'),{flag:false}) ;
  }
});
router.get('/signOut',function(request,response){
  request.session.destroy()
  response.render(path.join(__dirname,'..','/views/index'),{flag:false}) ;
});

module.exports = router
