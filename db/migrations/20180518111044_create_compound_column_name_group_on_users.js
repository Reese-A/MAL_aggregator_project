
exports.up = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.string('name', 255).notNullable();
    table.unique(['name', 'group_id']);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('name');
    table.primary('id');
  })
};
