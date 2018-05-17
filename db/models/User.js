const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() { return 'users' }
  get hasTimestamps() { return true }

  group() {
    return this.belongsToMany('Group', 'group_id')
  }
}

module.exports = bookshelf.model('User', User)