const mentorTagsDB = require("../models/mentorTagsDB");
const pgp = require("pg-promise")();
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

module.exports = {
  index(req, res, next) {
    mentorTagsDB
      .findAll()
      .then((mentorTags) =>
        res.json({ message: "Getting Mentor Tags", data: mentorTags })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: [] });
        else next(err);
      });
  },
  getOne(req, res, next) {
    mentorTagsDB
      .findById(req.params.id)
      .then((mentorTag) =>
        res.json({ message: "Getting Mentor Tag", data: mentorTag })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: {} });
        else next(err);
      });
  },
  getByMentorsId(req, res, next) {
    mentorTagsDB
      .findByMentorsId(req.params.id)
      .then((mentorTag) =>
        res.json({
          message: "Getting mentorTag assosiated with a mentor",
          data: mentorTag,
        })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: {} });
        else next(err);
      });
  },
  getByTagsId(req, res, next) {
    mentorTagsDB
      .findByTagsId(req.params.id)
      .then((mentorTag) =>
        res.json({
          message: "Getting mentors assosiated with a mentorTag",
          data: mentorTag,
        })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: {} });
        else next(err);
      });
  },
  create(req, res, next) {
    mentorTagsDB
      .save(req.body)
      .then((mentorTag) =>
        res.json({ message: "Adding mentorTag", data: mentorTag })
      )
      .catch((err) => next(err));
  },
  update(req, res, next) {
    mentorTagsDB
      .update(req.body)
      .then((mentorTag) =>
        res.json({ message: "Updated mentorTag", data: mentorTag })
      )
      .catch((err) => next(err));
  },
  delete(req, res, next) {
    mentorTagsDB
      .delete(req.params.id)
      .then(() => res.json({ message: "mentorTag Deleted" }))
      .catch((err) => next(err));
  },
};
