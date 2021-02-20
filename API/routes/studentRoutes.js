const express = require("express");
const studentsController = require("../controllers/studentsController");
const studentRouter = express.Router();

studentRouter
  .route("/")
  .get(studentsController.index)
  .post(studentsController.create)
  .put(studentsController.update);

studentRouter
  .route("/id/:id")
  .get(studentsController.getOne)
  .delete(studentsController.delete);

studentRouter.route("/userId/:id").get(studentsController.getByUserId);

module.exports = studentRouter;
