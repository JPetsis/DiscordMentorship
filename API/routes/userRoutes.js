const express = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = express.Router();

usersRouter
  .route("/")
  .get(usersController.index)
  .post(usersController.create)
  .put(usersController.update);

usersRouter
  .route("/id/:id")
  .get(usersController.getOne)
  .delete(usersController.delete);

usersRouter.route("/username/:username").get(usersController.getByUsername);

module.exports = usersRouter;
