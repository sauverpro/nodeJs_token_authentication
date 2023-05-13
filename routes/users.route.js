const myRoutes = require("express").Router()
const validateUserInput = require("../middlewares/user.validation.js")

const UserController = require("../controllers/user.controller.js")

myRoutes.post('/signup', validateUserInput, UserController.registerUser)
myRoutes.post('/login', validateUserInput, UserController.logUser) 
module.exports = myRoutes
