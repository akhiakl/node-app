var express = require('express');
var router = express.Router();
var User = require('./models/User')

/* GET home page. */
router.get('/', function(req, res){
	if (req.session.page){
		res.render(req.session.page,{username: req.session.uname});
	}
	else{
		res.render('index', {message: null});
	}
});

router.post('/', function(req,res){
	var givenusername = req.body.username;
	var givenpassword = req.body.password;
		User.byUsername(givenusername).then(function(nuser) {
			if (nuser == null){
				res.render('index',{message: 'No user found!!!'});
			}
			else{
				if (nuser.verifyPassword(givenpassword)){
					if (nuser.isAdmin()) {
						req.session.uname = nuser.get('username');
						req.session.name = nuser.get('name');
						req.session.page = 'homepage';
						res.render('homepage');
						
					} else {
						req.session.uname = nuser.get('username');
						req.session.name = nuser.get('name');
						req.session.page = 'home';
						res.redirect('./home');
						
					}
				}
				else{
					res.render('index',{message: 'Authentication failed...'});
				}
			}	
		});
});

module.exports = router;
