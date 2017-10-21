var express = require('express');
var router = express.Router();
var Todo = require('./models/Todo');


router.get('/', function(req, res) {
    if (req.session.page=='home'){
        Todo.forge().query({where:{ username: req.session.uname }}).fetchAll().then(function(everyuser){
            var list = everyuser.toJSON();
            res.render('home', {list: list, username: req.session.uname, name: req.session.name});
        })
	}
	else{
		res.redirect('/');
	}
});
module.exports = router;