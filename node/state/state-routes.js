var app = require('express').Router();
var state = require("./state");
app.get('/',state.getall);
app.post('/',state.add);
app.put('/',state.update);
app.delete('/',state.delete);
app.get('/getById',state.getById);
module.exports = app;
