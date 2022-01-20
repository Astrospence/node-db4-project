
exports.up = async function(knex) {
  await knex.schema
    .createTable('ingredients', table => {
        table.increments('ingredient_id')
        table.string('ingredient_name', 128)
            .notNullable()
            .unique()
    })
    .createTable('steps', table => {
        table.increments('step_id')
        table.integer('step_number')
            .notNullable()
            .unsigned()
        table.text('step_instructions', 500)
            .notNullable()
        table.integer('recipe_id')
            .notNullable()
            .unsigned()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('RESTRICT')
    })
    .createTable('recipes', table => {
        table.increments('recipe_id')
        table.string('recipe_name', 128)
            .notNullable()
            .unique()
        table.timestamp('created_at')
            .defaultTo(knex.fn.now())
            .notNullable()
            .unique()
    })
    .createTable('step_ingredients', table => {
        table.increments('step_ingredient_id')
        table.integer('ingredient_id')
            .notNullable()
            .unsigned()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
        table.integer('step_id')
            .notNullable()
            .unsigned()
            .references('step_id')
            .inTable('steps')
            .onDelete('RESTRICT')
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
};
