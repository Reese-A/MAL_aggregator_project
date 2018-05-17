const bookshelf = require('./bookshelf');

class Client extends bookshelf.Model {
  get tableName() { return 'clients' }
  get hasTimestamps() { return true }

  group() {
    return this.hasOne('Group', 'client_id')
  }
}

module.exports = bookshelf.model('Client', Client)