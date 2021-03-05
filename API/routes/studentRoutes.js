const express = require("express");
const studentsController = require("../controllers/studentsController");
const studentsRouter = express.Router();

studentsRouter
  .route("/")
  .get(studentsController.index)
  .post(studentsController.create)
  .put(studentsController.update);

studentsRouter
  .route("/id/:id")
  .get(studentsController.getOne)
  .delete(studentsController.delete);

studentsRouter.route("/userId/:id").get(studentsController.getByUserId);

module.exports = studentsRouter;
