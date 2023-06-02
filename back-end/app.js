

require('dotenv').config()


var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

require('./config/database')() //conexão ao banco

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);



//Rotas

const patientsRouter = require('./routes/patients')
app.use('/patients', patientsRouter)

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

const dentistsRouter = require('./routes/dentists')
app.use('/dentists', dentistsRouter)

module.exports = app;
