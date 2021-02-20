const tagsDB = require("../models/tagsDB");
const pgp = require("pg-promise")();
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

module.exports = {
  index(req, res, next) {
    tagsDB
      .findAll()
      .then((tags) => res.json({ message: "Getting Tags", data: tags }))
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: [] });
        else next(err);
      });
  },
  getOne(req, res, next) {
    tagsDB
      .findById(req.params.id)
      .then((tag) => res.json({ message: "Getting Tag", data: tag }))
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: {} });
        else next(err);
      });
  },
  getByName(req, res, next) {
    tagsDB
      .findByName(req.params.id)
      .then((tag) =>
        res.json({
          message: "Getting tag by name",
          data: tag,
        })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: {} });
        else next(err);
      });
  },
  create(req, res, next) {
    tagsDB
      .save(req.body)
      .then((tag) => res.json({ message: "Adding Tag", data: tag }))
      .catch((err) => next(err));
  },
  update(req, res, next) {
    tagsDB
      .update(req.body)
      .then((tag) => res.json({ message: "Updated Tag", data: tag }))
      .catch((err) => next(err));
  },
  delete(req, res, next) {
    tagsDB
      .delete(req.params.id)
      .then(() => res.json({ message: "Tag Deleted" }))
      .catch((err) => next(err));
  },
};
