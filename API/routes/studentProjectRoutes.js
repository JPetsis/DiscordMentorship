const express = require("express");
const studentProjectsController = require("../controllers/studentProjectsController");
const studentProjectsRouter = express.Router();

studentProjectsRouter
  .route("/")
  .get(studentProjectsController.index)
  .post(studentProjectsController.create)
  .put(studentProjectsController.update);

studentProjectsRouter
  .route("/id/:id")
  .get(studentProjectsController.getOne)
  .delete(studentProjectsController.delete);

studentProjectsRouter
  .route("/studentId/:id")
  .get(studentProjectsController.getByStudentId);

module.exports = studentProjectsRouter;
