var app = require('express').Router();
var city = require('./city');
app.get('/',city.getall);
app.post('/',city.add);
app.put('/',city.update);
app.delete('/',city.delete);

module.exports =app;