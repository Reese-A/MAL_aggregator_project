
exports.up = function(knex, Promise) {
  return knex.schema.createTable('series', (table)=>{
    table.increments();
    table.integer('mal_id').notNullable().unique();
    table.string('name', 255).notNullable().unique();
    table.string('image_link', 255);
    table.integer('episodes').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('series');
};
