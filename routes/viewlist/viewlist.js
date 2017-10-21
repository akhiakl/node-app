var Todo = require('../models/Todo');

exports.getList = function(req, res) {
    Todo.forge().query({where:{ username: req.session.uname }}).fetchAll().then(function(everyuser){
        res.json(everyuser);
    });
};

exports.insertList = function(req, res) {
	var data = {
		username: req.body.username,
		task: req.body.task
	};
	Todo.forge(data).save().then(function(user_data) {
		res.json(user_data);
	});
};

exports.editList = function(req, res) {
        var data = {
            task: req.body.task
        };
        if (!req.params.id) 
            return res.json({status: false, error: "invalid id"});

        Todo.forge({id: req.params.id}).save(data).then(function(user_data) {
            res.json({status: true, user_data});
        });
};

exports.deleteList = function(req, res) {
    if (!req.params.id) 
    return res.json({status: false, error: "invalid id"});
    Todo.forge({id: req.params.id}).destroy().then(function(user_data) {
        return res.json({status: true, user_data});
    });
};