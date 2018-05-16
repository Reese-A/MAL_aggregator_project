
exports.up = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('list_url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.string('list_url', 255).notNullable();
  })
};
