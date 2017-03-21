// require modules
const express = require('express');
const request = require('request');
const path = require('path');

// app = express
const app = express();

// get the public files
app.use(express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// render the index page
app.get('/', (req, res) => {
	request('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC', (error, response, body) => {
		const data = JSON.parse(body);
		res.render('index', {
			giphy: data,
		});
	});
});

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
