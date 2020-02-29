exports.up = async function(knex) {
  await knex.schema.createTable("cars", table => {
    table
      .integer("vin")
      .notNull()
      .unique()
      .primary();
    table.text("make").notNull();
    table.text("model").notNull();
    table.integer("milleage").notNull();
    table.text("transmissionType");
    table.text("carStatus");
  });
};

exports.down = function(knex) {};
