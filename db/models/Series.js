const bookshelf = require('./bookshelf');

class Series extends bookshelf.Model {
  get tableName() { return 'series' }
  get hasTimestamps() { return true }

  // gallery() {
  //   return this.hasMany('Gallery', 'user_id')
  // }
}

module.exports = bookshelf.model('Series', Series)