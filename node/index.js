var app = require('express')();
var bodyparser = require('body-parser');

var cors= require('cors');
app.use(cors());
//var fb=require('./config/fbconfig');
app.use(bodyparser.json());
var routes = require('./routes/routes');
app.use('/',routes);
app.listen(3000,function(){
    console.log("listening on 3000");
})