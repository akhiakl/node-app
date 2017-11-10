var User = require('../models/User');

exports.getIndexPage = function(req, res){
	if (req.session.page){
		res.render(req.session.page,{username: req.session.uname,name: req.session.name});
	}
	else{
		res.render('index');
	}
};

exports.login = function(req,res){
	var givenusername = req.body.username;
	var givenpassword = req.body.password;
		
		User.findOne({username: givenusername}, function(err,nuser){
			if (nuser == null) {
				var message = 'No user Found';
				return res.send(message);
			}
			else {
				if (nuser.password==givenpassword) {
					if (nuser.admin==true) {
						req.session.uname = nuser.username;
						req.session.name = nuser.name;
						req.session.page = 'homepage';
						message = 'success';
						return res.send(message);

					} else {
						req.session.uname = nuser.username;
						req.session.name = nuser.name;
						req.session.page = 'home';
						message = 'success';
						return res.send(message);

					}
				}
				else {
					message = 'Wrong password';
					return res.send(message);
				}
			}
		})
		//
};