const express = require("express");
const studentsProjectsController = require("../controllers/studentProjectsController");
const studentProjectsRouter = express.Router();

studentProjectsRouter
  .route("/")
  .get(studentsProjectsController.index)
  .post(studentsProjectsController.create)
  .put(studentsProjectsController.update);

studentProjectsRouter
  .route("/id/:id")
  .get(studentsProjectsController.getOne)
  .delete(studentsProjectsController.delete);

studentProjectsRouter
  .route("/studentId/:id")
  .get(studentsProjectsController.getByStudentId);

module.exports = studentProjectsRouter;
