// require modules
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();

const key = process.env.API_KEY;
// const host = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${val}`;

// app = express
const app = express();

// bp
app.use(bodyParser.urlencoded({ extended: true }));

// get the public files
app.use(express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// render the index page
app.get('/', (req, res) => {
	res.render('index');
});

// handle the search input and redirect
app.post('/', (req, res) => {
  	res.redirect('/' + req.body.val);
});

// parampampampam
app.get('/:input', (req, res) => {
	request(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${req.params.input}`, (error, response, body) => {
		const data = JSON.parse(body);
		res.render('zoom', {
			movies: data,
		});
	});
});

// app.get('/:input/:id', (req, res) => {
// 	request(host + req.params.input + req.params.id, (error, response, body) => {
// 		const data = JSON.parse(body);
// 		const input = req.params.input;
// 		res.render('megazoom.ejs', {
// 			movie: data,
// 			input: req.params.input,
// 		});
// 	});
// });

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
