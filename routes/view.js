var express = require('express');
var router = express.Router();
var User = require('./models/User');

router.get('/', function(req, res) {
	if (req.session.page=='homepage'){
		User.find({},function(err, everyuser){
			var result = everyuser;
			res.render('view', {result: result});
		});
	}
	else{
		res.redirect('/');
	}
});

module.exports = router;