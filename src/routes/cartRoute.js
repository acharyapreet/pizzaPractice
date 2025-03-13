const express = require('express');
const { cartController } = require('../controller/cartController');

const cartRoute = express.Router();

//creating cart route
cartRoute.post('/:id',cartController)

module.exports = cartRoute;