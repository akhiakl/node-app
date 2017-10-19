var bookshelf = require('./bookshelf');

//Todo module
var Todo = bookshelf.Model.extend({
	tableName: 'todo-list',
	hasTimestamps: true,
	user: function() {
	  return this.belongsTo(User);
	},

  });

  module.exports = Todo;