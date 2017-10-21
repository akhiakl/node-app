var bookshelf = require('./bookshelf');

//User module
var User = bookshelf.Model.extend({  
    tableName: 'users',
    hasTimestamps: true,
    todo: function() {
        return this.hasMany(Todo)
    },

    verifyPassword: function(password) {
        return this.get('password') === password;
    },
    isAdmin: function() {
        return this.get('role') === 'admin';
    },
},
{
    byEmail: function(email) {
        return this.forge().query({where:{ email: email }}).fetch();
    },
    byUsername: function(username) {
        return this.forge().query({where:{ username: username }}).fetch();
    }
},
);

module.exports = User;