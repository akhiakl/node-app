var User = require('../models/User');

exports.addUser = function (req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        name: req.body.name,
        admin: req.body.admin
    });
    user.save(function (err, user_data) {
            console.log(user_data);
        });
};