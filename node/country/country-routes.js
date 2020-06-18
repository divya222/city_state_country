var app = require('express').Router();
var country = require('./country');
app.get('/',country.getall);
app.post('/',country.add);
app.put('/',country.update);
app.delete('/',country.delete);
app.get('/getById',country.getById);
module.exports = app;