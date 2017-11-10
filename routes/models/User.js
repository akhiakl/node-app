var schema = require('./schema');
var mongoose = require('mongoose');

// schema.userSchema.byUsername= function byUsername(username){
//     this.find({ username: username }, function (err, user) {
//         if (err) throw err;
//         return user;
//     });
// };
var User = mongoose.model('User', schema.userSchema);

// new User({
//     username: 'akhilk4k',
//     password: 'password',
//     email: 'akhilk4k@gmail.com',
//     admin: true
// }).save();

module.exports = User;