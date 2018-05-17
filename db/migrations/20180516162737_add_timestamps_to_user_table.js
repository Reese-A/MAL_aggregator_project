
exports.up = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('created_at');
    table.dropColumn('updated_at');
  })
};
