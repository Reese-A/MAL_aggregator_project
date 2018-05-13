
exports.up = function(knex, Promise) {
  return knex.schema.createTable('groups_users', (table)=>{
    table.increments();
    table.integer('group_id').unsigned();
    table.foreign('group_id').references('id').inTable('groups');
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('id').inTable('users');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('groups_users');
};
