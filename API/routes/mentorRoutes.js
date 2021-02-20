const express = require("express");
const mentorsController = require("../controllers/mentorsController");
const mentorsRouter = express.Router();

mentorsRouter
  .route("/")
  .get(mentorsController.index)
  .post(mentorsController.create)
  .put(mentorsController.update);

mentorsRouter
  .route("/id/:id")
  .get(mentorsController.getOne)
  .delete(mentorsController.delete);

mentorsRouter.route("/userId/:id").get(mentorsController.getByUserId);

module.exports = mentorsRouter;
