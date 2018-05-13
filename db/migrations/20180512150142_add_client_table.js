
exports.up = function(knex, Promise) {
  return knex.schema.createTable('clients', (table) => {
    table.increments();
    table.string('username', 50).notNullable().unique();
    table.string('password').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('clients');
};
