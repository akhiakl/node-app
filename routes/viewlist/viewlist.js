var Todo = require('../models/Todo');

exports.getList = function(req, res) {
    Todo.find({},function(err,everyuser){
        if (err) throw err;
        res.send(everyuser);
    });
};

exports.insertList = function(req, res) {
	var todo = new Todo({
		username: req.body.username,
		task: req.body.task
	});
	todo.save(function(err, user_data) {
		res.send(user_data);
	});
};

exports.editList = function(req, res) {
    var data = {
		task: req.body.task
	};
        if (!req.params.id) 
            return res.json({status: false, error: "invalid id"});

        Todo.findByIdAndUpdate(req.params.id, data, function(user_data) {
            res.json({status: true, user_data});
        });
};

exports.deleteList = function(req, res) {
    if (!req.params.id) 
    return res.json({status: false, error: "invalid id"});
    Todo.findByIdAndRemove(req.params.id,function(user_data) {
        return res.json({status: true, user_data});
    });
};