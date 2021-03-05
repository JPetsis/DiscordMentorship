const express = require("express");
const mentorTagsController = require("../controllers/mentorTagsController");
const mentorTagRouter = express.Router();

mentorTagRouter
  .route("/")
  .get(mentorTagsController.index)
  .post(mentorTagsController.create)
  .put(mentorTagsController.update);

mentorTagRouter
  .route("/id/:id")
  .get(mentorTagsController.getOne)
  .delete(mentorTagsController.delete);

mentorTagRouter.route("/mentorId/:id").get(mentorTagsController.getByMentorsId);

mentorTagRouter.route("/tagId/:id").get(mentorTagsController.getByTagsId);

module.exports = mentorTagRouter;
