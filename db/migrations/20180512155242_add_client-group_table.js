
exports.up = function(knex, Promise) {
  return knex.schema.createTable('clients_groups', (table)=>{
    table.increments();
    table.integer('client_id').unsigned();
    table.foreign('client_id').references('id').inTable('clients');
    table.integer('group_id').unsigned();
    table.foreign('group_id').references('id').inTable('groups');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('clients_groups');
};
