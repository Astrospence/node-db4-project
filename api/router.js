const express = require('express')
const Helpers = require('./model') //eslint-disable-line

const router = express.Router()

router.get('/:id', (req, res, next) => { //eslint-disable-line
    console.log('scaffolding')
})

module.exports = router