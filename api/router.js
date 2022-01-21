const express = require('express')
const Helpers = require('./model') //eslint-disable-line

const router = express.Router()

router.get('/:id', (req, res, next) => { //eslint-disable-line
    const { id } = req.params

    Helpers.getRecipeById(id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(next)
})

module.exports = router