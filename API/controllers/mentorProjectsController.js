const mentorProjectsDB = require("../models/mentorProjectsDB");
const pgp = require("pg-promise")();
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

module.exports = {
  index(req, res, next) {
    mentorProjectsDB
      .findAll()
      .then((mentorProjects) =>
        res.json({ message: "Getting Mentor Projects", data: mentorProjects })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: [] });
        else next(err);
      });
  },
  getOne(req, res, next) {
    mentorProjectsDB
      .findById(req.params.id)
      .then((mentorProject) =>
        res.json({ message: "Getting Mentor Project", data: mentorProject })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: {} });
        else next(err);
      });
  },
  getByMentorId(req, res, next) {
    mentorProjectsDB
      .findByMentorId(req.params.id)
      .then((mentorProjects) =>
        res.json({
          message: "Getting mentor Project by mentor Id",
          data: mentorProjects,
        })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: [] });
        else next(err);
      });
  },
  create(req, res, next) {
    mentorProjectsDB
      .save(req.body)
      .then((mentorProject) =>
        res.json({ message: "Adding Mentor Project", data: mentorProject })
      )
      .catch((err) => next(err));
  },
  update(req, res, next) {
    mentorProjectsDB
      .update(req.body)
      .then((mentorProject) =>
        res.json({ message: "Updated Mentor Project", data: mentorProject })
      )
      .catch((err) => next(err));
  },
  delete(req, res, next) {
    mentorProjectsDB
      .delete(req.params.id)
      .then(() => res.json({ message: "Mentor Project Deleted" }))
      .catch((err) => next(err));
  },
};
