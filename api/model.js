const db = require('../data/db-config')

const getRecipeById = (recipe_id) => {
    return db('recipes')
}

module.exports = {
    getRecipeById,
}