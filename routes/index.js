const express = require('express');
const router = express.Router();

// get home page
router.get('/', (req, res, next) => {
	res.locals.title = 'home';
	res.render('index');
});



module.exports = router;
