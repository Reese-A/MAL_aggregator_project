const bookshelf = require('./bookshelf');

class Group extends bookshelf.Model {
  get tableName() { return 'groups' }
  get hasTimestamps() { return true }

  // gallery() {
  //   return this.hasMany('Gallery', 'user_id')
  // }
}

module.exports = bookshelf.model('Group', Group)