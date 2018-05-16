
exports.up = function(knex, Promise) {
  return knex.schema.table('groups', (table) => {
    table.integer('client_id').unsigned();
    table.foreign('client_id').references('id').inTable('clients');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('groups', (table) => {
    table.dropColumn('client_id');
  })
};
