const studentsDB = require("../models/studentsDB");
const pgp = require("pg-promise")();
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

module.exports = {
  index(req, res, next) {
    studentsDB
      .findAll()
      .then((students) =>
        res.json({ message: "Getting Students", data: students })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: [] });
        else next(err);
      });
  },
  getOne(req, res, next) {
    studentsDB
      .findById(req.params.id)
      .then((student) =>
        res.json({ message: "Getting Student", data: student })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: {} });
        else next(err);
      });
  },
  getByUserId(req, res, next) {
    studentsDB
      .findByUserId(req.params.id)
      .then((student) =>
        res.json({
          message: "Getting student by user ID",
          data: student,
        })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: {} });
        else next(err);
      });
  },
  create(req, res, next) {
    studentsDB
      .save(req.body)
      .then((student) => res.json({ message: "Adding Student", data: student }))
      .catch((err) => next(err));
  },
  update(req, res, next) {
    studentsDB
      .update(req.body)
      .then((student) =>
        res.json({ message: "Updated Student", data: student })
      )
      .catch((err) => next(err));
  },
  delete(req, res, next) {
    studentsDB
      .delete(req.params.id)
      .then(() => res.json({ message: "Student Deleted" }))
      .catch((err) => next(err));
  },
};
