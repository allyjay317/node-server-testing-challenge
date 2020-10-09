
exports.up = function (knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments()
    tbl.text('name')
      .notNullable()
      .unique()
    tbl.text('language')
    tbl.text('url')
      .unique()
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('projects')
};
