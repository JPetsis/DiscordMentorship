const express = require("express");
const tagsController = require("../controllers/tagsController");
const tagsRouter = express.Router();

tagsRouter
  .route("/")
  .get(tagsController.index)
  .post(tagsController.create)
  .put(tagsController.update);

tagsRouter
  .route("/id/:id")
  .get(tagsController.getOne)
  .delete(tagsController.delete);

tagsRouter.route("/name/:name").get(tagsController.getByName);

module.exports = tagsRouter;
