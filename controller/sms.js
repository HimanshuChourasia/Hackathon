const accountSid = 'AC0d8bef4735b4b45382bcf16d72a9e1f8';
const authToken = 'f55989338041e0804a2216d74dd96df4';
var client = require('twilio')(
  accountSid, authToken
);

client.messages.create({
  from: "+19803191617",
  to: '+17049074575',
  body: "You just sent an SMS from Node.js using Twilio!"
}).then((message) => console.log(message.sid));
