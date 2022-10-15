const { Router} = require("express");

const UserController = require("../controlers/UsersController")

const usersRouter = Router();

const usersController = new UserController();


usersRouter.post("/", usersController.create);

module.exports = usersRouter;