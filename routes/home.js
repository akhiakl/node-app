var express = require('express');
var router = express.Router();
var Todo = require('./models/Todo');


router.get('/', function(req, res) {
    if (req.session.page=='home'){
        Todo.find({},function(err, everyuser){
            var list = everyuser;
            res.render('home', {list: list, username: req.session.uname, name: req.session.name});
        })
	}
	else{
		res.redirect('/');
	}
});
module.exports = router;