// require modules
const express = require('express');
const request = require('request');
const path = require('path');

require('dotenv').config();

const key = process.env.API_KEY;
const host = `http://partnerapi.funda.nl/feeds/Aanbod.svc/json/${key}/?type=koop&zo=/amsterdam/tuin/&page=1&pagesize=25`;

// app = express
const app = express();

// get the public files
app.use(express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// render the index page
app.get('/', (req, res) => {
	request(host, (error, response, body) => {
		const data = JSON.parse(body);
		console.log(data);
		res.render('index', {
			houses: data,
		});
	});
});

// parampampampam
app.get('/:koop', (req, res) => {
	request(`http://partnerapi.funda.nl/feeds/Aanbod.svc/json/${key}/?type=${req.params.koop}&zo=/amsterdam/tuin/&page=1&pagesize=25`, (error, response, body) => {
		const data = JSON.parse(body);
		res.render('zoom', {
			houses: data,
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
