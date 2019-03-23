var fs=require('fs');
var rawdata=fs.readFileSync('../model/patient.json');
var getUsers=function(id){
  var output=JSON.parse(rawdata);
  for(i=0;i<output.user.length;i++){
     if(id===output.user[i].userId){
       var res=i;
     }
};
  if(res>=0)
  {
    return output.user[res];
  }
  else
  {
    return -1;
  }
};
console.log(getUsers('usid1'));
