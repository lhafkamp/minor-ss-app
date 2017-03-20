// require modules
const express = require('express');
require('dotenv').config();

// get hidden APIKEY
const APIKEY = process.env.API_KEY;

// app = express
const app = express();

// serve static files
app.use(express.static('public'));

// send to the page
app.get('/', (req, res) => {
	res.send(home());
});

// render home
function home() {
	return `
		<!DOCTYPE html>
		<html lang="nl">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="initial-scale=1, width=device-width">
			<title>Luuk - Funda</title>
			<link rel="stylesheet" href="css/styles.css">
		</head>
			<body>

				<section class="options">
					<img src="images/huis.svg">

					<div class="cities">
						<h1>Waar wil je wonen?</h1>
						<button><span>Loading...<span></button>
						<button><span>Loading...<span></button>
						<button><span>Loading...<span></button>
					</div>

					<div class="buyrent hide">
						<h1>Wil je kopen of huren?</h1>
						<button>Kopen</button>
						<button>Huren</button>
					</div>
					
					<div class="who hide">
						<h1>Wat definieert jou?</h1>
						<button>Muzikant</button>
						<button>Natuurmens</button>
						<button>Blut</button>
					</div>	
				</section>
				
				<div class="results hide">
					<img src="images/logo.svg">
					<h1>Dit past bij jou</h1>
					<span></span>
				</div>

				<div id="loaderbox" class="hide">
		    		<img src="images/rolling.svg">
				</div>

				<container class="houses"></container>

				<script src="js/config.js"></script>
				<script src="js/script.js"></script>
			</body>
		</html>
	`;
}

// run app on 9000
app.listen(9000, () => {
	console.log('Running.. ¯l_(ツ)_/¯');
});
