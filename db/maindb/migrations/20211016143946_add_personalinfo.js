
exports.up = async function(knex) {
  await knex.schema.createTable('personal_infos', table => {
    table.increments('id').primary();
    table.integer('user_id');
    table.string('first_name');
    table.string('last_name');
    table.timestamps();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable('personal_infos');
  
};
