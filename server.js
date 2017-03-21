// require modules
const express = require('express');
const path = require('path');

// routers
const indexRouter = require('./routes/index');

// app = express
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// connect routers to routes
app.use('/', indexRouter);

// run app on 9000
app.listen(9000, () => {
	console.log('');
    console.log('All hail the mighty server bunny');
    console.log('');
    console.log('(l)(/)');
    console.log('( Oo )');
    console.log('(")(")o');
    console.log('');
});
