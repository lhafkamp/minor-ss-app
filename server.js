// require modules
const express = require('express');

// app = express
const app = express();

// serve static files
app.use(express.static('public'));

// send to the page
app.get('/', (req, res) => {

});

// run app on 9000
app.listen(9000, () => {
	console.log('Running.. ¯l_(ツ)_/¯');
});
