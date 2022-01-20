
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        {ingredient_id: 1, step_id: 3},
        {ingredient_id: 2, step_id: 1},
        {ingredient_id: 3, step_id: 2}
      ])
    })
}
