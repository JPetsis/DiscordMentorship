const studentTagsDB = require("../models/studentTagsDB");
const pgp = require("pg-promise")();
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

module.exports = {
  index(req, res, next) {
    studentTagsDB
      .findAll()
      .then((studentTags) =>
        res.json({ message: "Getting Student Tags", data: studentTags })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: [] });
        else next(err);
      });
  },
  getOne(req, res, next) {
    studentTagsDB
      .findById(req.params.id)
      .then((studentTag) =>
        res.json({ message: "Getting Tag", data: studentTag })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: {} });
        else next(err);
      });
  },
  getByStudentsId(req, res, next) {
    studentTagsDB
      .findByStudentsId(req.params.id)
      .then((studentTag) =>
        res.json({
          message: "Getting studentTag assosiated with a student",
          data: studentTag,
        })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: {} });
        else next(err);
      });
  },
  getByTagsId(req, res, next) {
    studentTagsDB
      .findByTagsId(req.params.id)
      .then((studentTag) =>
        res.json({
          message: "Getting students assosiated with a studentTag",
          data: studentTag,
        })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: {} });
        else next(err);
      });
  },
  create(req, res, next) {
    studentTagsDB
      .save(req.body)
      .then((studentTag) =>
        res.json({ message: "Adding studentTag", data: studentTag })
      )
      .catch((err) => next(err));
  },
  update(req, res, next) {
    studentTagsDB
      .update(req.body)
      .then((studentTag) =>
        res.json({ message: "Updated studentTag", data: studentTag })
      )
      .catch((err) => next(err));
  },
  delete(req, res, next) {
    studentTagsDB
      .delete(req.params.id)
      .then(() => res.json({ message: "studentTag Deleted" }))
      .catch((err) => next(err));
  },
};
