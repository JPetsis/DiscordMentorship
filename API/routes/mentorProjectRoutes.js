const express = require("express");
const mentorProjectsController = require("../controllers/mentorProjectsController");
const mentorProjectsRouter = express.Router();

mentorProjectsRouter
  .route("/")
  .get(mentorProjectsController.index)
  .post(mentorProjectsController.create)
  .put(mentorProjectsController.update);

mentorProjectsRouter
  .route("/id/:id")
  .get(mentorProjectsController.getOne)
  .delete(mentorProjectsController.delete);

mentorProjectsRouter
  .route("/mentorId/:id")
  .get(mentorProjectsController.getByMentorId);

module.exports = mentorProjectsRouter;
