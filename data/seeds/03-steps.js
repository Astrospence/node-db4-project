
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, step_instructions: 'Boil noodles in water until soft', recipe_id: 1},
        {step_number: 2, step_instructions: 'Bake meatballs at 450 degrees farenheit until crisp and brown on outside', recipe_id: 1},
        {step_number: 3, step_instructions: 'Heat spaghetti sauce in saucepan', recipe_id: 1},
        {step_number: 4, step_instructions: 'After draining finished noodles, add noodles, meatballs, and sauce into a large bowl. Mix and serve', recipe_id: 1}
      ])
    })
}
