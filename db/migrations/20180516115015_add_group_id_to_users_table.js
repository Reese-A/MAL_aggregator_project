
exports.up = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.integer('group_id').unsigned();
    table.foreign('group_id').references('id').inTable('groups');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('group_id');
  })
};
