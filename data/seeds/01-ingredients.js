
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'sauce'},
        {ingredient_name: 'noodles'},
        {ingredient_name: 'meatballs'}
      ])
    })
}
