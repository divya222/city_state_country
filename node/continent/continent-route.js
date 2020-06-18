var app = require('express').Router();
var continent = require('./continent');
app.get('/',continent.getall);
app.post('/',continent.add);
module.exports = app;