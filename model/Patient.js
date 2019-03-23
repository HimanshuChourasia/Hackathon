var fs=require('fs');
var rawdata=fs.readFileSync('model/patient.json');
module.exports.getUsers=function(emailAddress){
  var output=JSON.parse(rawdata);
  for(i=0;i<output.user.length;i++){
     if(emailAddress===output.user[i].emailAddress){
       var res=i;
     }
};
  if(res>=0)
  {
    return true;
  }
  else
  {
    return false;
  }
};
