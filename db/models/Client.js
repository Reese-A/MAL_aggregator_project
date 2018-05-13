const bookshelf = require('./bookshelf');

class Client extends bookshelf.Model {
  get tableName() { return 'client' }
  get hasTimestamps() { return true }

  // gallery() {
  //   return this.hasMany('Gallery', 'user_id')
  // }
}

module.exports = bookshelf.model('Client', Client)