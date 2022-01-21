const db = require('../data/db-config')

const getRecipeById = async (recipe_id) => {
    const recipeInfo = await db('recipes').where('recipes.recipe_id', recipe_id).first()
    const stepInfo = await db('steps as s')
        .leftJoin('ingredients as i', 's.step_id', 'i.ingredient_id')
        .select('s.step_id', 's.step_number', 's.step_instructions', 'i.ingredient_id', 'i.ingredient_name')
        .orderBy('s.step_number')

    const response = {
        recipe_id: recipeInfo.recipe_id,
        recipe_name: recipeInfo.recipe_name,
        created_at: recipeInfo.created_at,
        steps: stepInfo.map(step => {
            if (step.ingredient_id) {
                return {
                    step_id: step.step_id,
                    step_number: step.step_number,
                    step_instructions: step.step_instructions,
                    ingredients: [
                        {ingredient_id: step.ingredient_id, ingredient_name: step.ingredient_name}
                    ]
                }
            } else {
                return {
                    step_id: step.step_id,
                    step_number: step.step_number,
                    step_instructions: step.step_instructions,
                    ingredients: []
                }
            }
        })
    }
        
    return response
}

module.exports = {
    getRecipeById,
}