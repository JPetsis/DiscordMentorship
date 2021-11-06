const mentorStudentsDB = require("../models/mentorStudentsDB");
const pgp = require("pg-promise")();
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

module.exports = {
  index(req, res, next) {
    mentorStudentsDB
      .findAll()
      .then((mentorStudents) =>
        res.json({ message: "Getting Student Tags", data: mentorStudents })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: [] });
        else next(err);
      });
  },
  getOne(req, res, next) {
    mentorStudentsDB
      .findById(req.params.id)
      .then((mentorStudent) =>
        res.json({ message: "Getting Mentor Student", data: mentorStudent })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: {} });
        else next(err);
      });
  },
  getByStudentsId(req, res, next) {
    mentorStudentsDB
      .findByStudentsId(req.params.id)
      .then((mentorStudent) =>
        res.json({
          message: "Getting Students assosiated with a Mentor",
          data: mentorStudent,
        })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: {} });
        else next(err);
      });
  },
  getByMentorsId(req, res, next) {
    mentorStudentsDB
      .findByTagsId(req.params.id)
      .then((mentorStudents) =>
        res.json({
          message: "Getting Mentor assosiated with Students",
          data: mentorStudents,
        })
      )
      .catch((err) => {
        if (err instanceof QRE && err.code === qrec.noData)
          return res.json({ data: {} });
        else next(err);
      });
  },
  getByMentorsIdAndStudentsId(req, res, next) {
    let queryData = { mentors_id: req.params.mentorsId, students_id: req.params.students_id };
    mentorStudentsDB.findByMentorsIdAndStudentsId(queryDaya)
    .then(mentorStudent => {
      res.json({
        message: "Getting Student Assosiated with Mentor",
        data: mentorStudent
      })
    })
    .catch(err => {
      if (err instanceof QRE && err.code === qrec.noData)
        return res.json({ data: {} });
      else next(err);
    })
  },
  create(req, res, next) {
    mentorStudentsDB
      .save(req.body)
      .then((mentorStudent) =>
        res.json({ message: "Adding mentor Student", data: mentorStudent })
      )
      .catch((err) => next(err));
  },
  update(req, res, next) {
    mentorStudentsDB
      .update(req.body)
      .then((mentorStudent) =>
        res.json({ message: "Updated mentor Student", data: mentorStudent })
      )
      .catch((err) => next(err));
  },
  delete(req, res, next) {
    mentorStudentsDB
      .delete(req.params.id)
      .then(() => res.json({ message: "mentor Student Deleted" }))
      .catch((err) => next(err));
  },
};
