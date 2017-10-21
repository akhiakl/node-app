var express = require('express');
var router = express.Router();
var User = require('./models/User');

router.get('/', function(req, res) {
	if (req.session.page=='homepage'){
		User.forge().fetchAll({columns: ['id', 'name', 'role']}).then(function(everyuser){
			var result = everyuser.toJSON();
			res.render('view', {result: result});
		});
	}
	else{
		res.redirect('/');
	}
});

module.exports = router;