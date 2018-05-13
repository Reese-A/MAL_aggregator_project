const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() { return 'users' }
  get hasTimestamps() { return true }

  // gallery() {
  //   return this.hasMany('Gallery', 'user_id')
  // }
}

module.exports = bookshelf.model('User', User)