let express = require('express');
let app = express();
console.log("Hello World");

/* solution 1
app.get('/',function (req,res){
  res.send("Hello Express");
});
*/
app.get('/',function (req,res){
    res.sendFile(__dirname + '/views/index.html');
  });
  
































 module.exports = app;
