const mentorsDB = require("../models/mentorsDB");
const pgp = require("pg-promise")();
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

module.exports = {
  index(req, res, next) {
    mentorsDB
      .findAll()
      .then((mentors) =>
        res.json({ message: "Getting Mentorss", data: mentors })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: [] });
        else next(err);
      });
  },
  getOne(req, res, next) {
    mentorsDB
      .findById(req.params.id)
      .then((mentor) => res.json({ message: "Getting Mentorr", data: mentor }))
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: {} });
        else next(err);
      });
  },
  getByUserId(req, res, next) {
    mentorsDB
      .findByUserId(req.params.id)
      .then((mentor) =>
        res.json({
          message: "Getting mentor assosiated with the student",
          data: mentor,
        })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: {} });
        else next(err);
      });
  },
  create(req, res, next) {
    mentorsDB
      .save(req.body)
      .then((mentor) => res.json({ message: "Adding Mentor", data: mentor }))
      .catch((err) => next(err));
  },
  delete(req, res, next) {
    mentorsDB
      .delete(req.params.id)
      .then(() => res.json({ message: "Mentor Deleted" }))
      .catch((err) => next(err));
  },
};
