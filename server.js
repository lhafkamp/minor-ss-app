// require modules
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const compression = require('compression');
const critical = require('critical');
const path = require('path');
require('dotenv').config();

// express
const app = express();

// gzip
app.use(compression());

// bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// put the secret API_KEY in key
const key = process.env.API_KEY;

// get the public files
app.use(express.static('public'));

// css critical
critical.generate({
    base: 'public/',
    src: 'http://localhost:9000',
    dest: 'css/critical.css',
    width: 1300,
    height: 900
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// render the index page
app.get('/', (req, res) => {
	res.render('index');
});

// handle the search input and redirect
app.post('/', (req, res) => {
  	res.redirect('/results/' + req.body.val);
});

// show results
app.get('/results/:input', (req, res) => {
	request(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${req.params.input}`, (error, response, body) => {
		const data = JSON.parse(body);
		const value = req.params.input;
		res.render('results', {
			movies: data,
			value: value,
		});
	});
});

// show a single movie
app.get('/results/:input/:id', (req, res) => {
	request(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${req.params.input}/${req.params.id}`, (error, response, body) => {
		const data = JSON.parse(body);
		const value = req.params.input;
		res.render('zoom', {
			movie: data,
			value: value,
		});
	});
});

// in case of error
app.get('*', (req, res) => {
	res.render('error');
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
