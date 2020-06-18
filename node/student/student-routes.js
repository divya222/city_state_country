var app = require('express').Router();
var student = require('./student');
app.get('/',student.getall);
app.post('/',student.add);
module.exports = app;