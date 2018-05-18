
exports.up = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('name');
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.string('name', 255).notNullable().unique();
  })
};
