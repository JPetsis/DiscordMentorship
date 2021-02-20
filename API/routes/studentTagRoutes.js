const express = require("express");
const studentTagsController = require("../controllers/studentTagsController");
const studentTagRouter = express.Router();

studentTagRouter
  .route("/")
  .get(studentTagsController.index)
  .post(studentTagsController.create)
  .put(studentTagsController.update);

studentTagRouter
  .route("/id/:id")
  .get(studentTagsController.getOne)
  .delete(studentTagsController.delete);

studentTagRouter
  .route("/studentId/:id")
  .get(studentTagsController.getByStudentsId);

studentTagRouter.route("/tagId/:id").get(studentTagsController.getByTagsId);

module.exports = studentTagRouter;
