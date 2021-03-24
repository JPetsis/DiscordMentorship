const express = require("express");
const mentorStudentsController = require("../controllers/mentorStudentsController");
const mentorStudentRouter = express.Router();

mentorStudentRouter
  .route("/")
  .get(mentorStudentsController.index)
  .post(mentorStudentsController.create)
  .put(mentorStudentsController.update);

mentorStudentRouter
  .route("/id/:id")
  .get(mentorStudentsController.getOne)
  .delete(mentorStudentsController.delete);

mentorStudentRouter
  .route("/studentId/:id")
  .get(mentorStudentsController.getByStudentsId);

mentorStudentRouter
  .route("/mentorId/:id")
  .get(mentorStudentsController.getByMentorsId);

mentorStudentRouter
  .route("/mentor/mentorsId/:mentorsId/students/studentsId/:studentsId")
  .get(mentorStudentsController.getByMentorsIdAndStudentsId);

module.exports = mentorStudentRouter;
