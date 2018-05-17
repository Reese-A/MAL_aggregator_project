const bookshelf = require('./bookshelf');

class Group extends bookshelf.Model {
  get tableName() { return 'groups' }
  get hasTimestamps() { return true }

  client() {
    return this.belongsTo('Client', 'client_id')
  }

  user(){
    return this.hasMany('User', 'group_id')
  }
}

module.exports = bookshelf.model('Group', Group)