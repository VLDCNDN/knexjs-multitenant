
exports.up = async function(knex) {
  await knex.schema.createTable('animals', table => {
    table.increments('id').primary();
    table.string('name');
    table.timestamps();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable('animals');
  
};
