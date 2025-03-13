const express = require('express');
const { userController } = require('../controller/userController');

//creating routing
const userRouter = express.Router();
userRouter.post('/',userController);

module.exports = userRouter;