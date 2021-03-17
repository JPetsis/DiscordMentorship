const studentProjectsDB = require("../models/studentProjectsDB");
const pgp = require("pg-promise")();
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

module.exports = {
  index(req, res, next) {
    studentProjectsDB
      .findAll()
      .then((studentProjects) =>
        res.json({ message: "Getting Student Projects", data: studentProjects })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: [] });
        else next(err);
      });
  },
  getOne(req, res, next) {
    studentProjectsDB
      .findById(req.params.id)
      .then((studentProject) =>
        res.json({ message: "Getting Student Project", data: studentProject })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: {} });
        else next(err);
      });
  },
  getByStudentId(req, res, next) {
    studentProjectsDB
      .findByStudentId(req.params.id)
      .then((studentProject) =>
        res.json({
          message: "Getting student Project by student Id",
          data: studentProject,
        })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: {} });
        else next(err);
      });
  },
  create(req, res, next) {
    studentProjectsDB
      .save(req.body)
      .then((studentProject) =>
        res.json({ message: "Adding Student Project", data: studentProject })
      )
      .catch((err) => next(err));
  },
  update(req, res, next) {
    studentProjectsDB
      .update(req.body)
      .then((studentProject) =>
        res.json({ message: "Updated Student Project", data: studentProject })
      )
      .catch((err) => next(err));
  },
  delete(req, res, next) {
    studentProjectsDB
      .delete(req.params.id)
      .then(() => res.json({ message: "Student Project Deleted" }))
      .catch((err) => next(err));
  },
};
