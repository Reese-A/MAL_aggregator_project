
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_rankings', (table)=>{
    table.increments();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('id').inTable('users');
    table.integer('series_id').unsigned();
    table.foreign('series_id').references('id').inTable('series');
    table.integer('score');
    table.integer('weighted_score');
    table.integer('episodes_watched');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_rankings');
};
