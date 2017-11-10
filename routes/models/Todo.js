var schema = require('./schema');
var mongoose = require('mongoose');
var Todo = mongoose.model('Task', schema.todoSchema);
module.exports = Todo;