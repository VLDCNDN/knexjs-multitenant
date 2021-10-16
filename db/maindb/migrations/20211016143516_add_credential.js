
exports.up = async function(knex) {
  await knex.schema.createTable('credentials', table => {
    table.increments('id').primary();
    table.string('username');
    table.string('password');
    table.timestamps();
  });
  
};

exports.down = async function(knex) {
  await knex.schema.dropTable('credentials');
};
