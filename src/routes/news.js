const express = require('express')
const route = express.Router()

const newController = require('../app/controllers/NewController')


route.use('/:id', newController.show)
route.use('/', newController.index)

module.exports = route