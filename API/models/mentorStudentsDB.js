const db = require("../config/connection");

module.exports = {
  findAll() {
    return db.many("SELECT * FROM mentor_students");
  },
  findById(id) {
    return db.one("SELECT * FROM mentor_students WHERE id = $1", id);
  },
  findByStudentsId(data) {
    return db.one("SELECT * FROM mentor_students WHERE students_id = $1", data);
  },
  findByMentorsId(data) {
    return db.one("SELECT * FROM mentor_students WHERE mentors_id = $1", data);
  },
  save(studentTag) {
    return db.one(
      `INSERT INTO mentor_students (mentors_id, students_id) 
      VALUES ($/mentors_id/, $/students_id/)
      RETURNING *`,
      mentorStudent
    );
  },
  update(studentTag) {
    return db.one(
      `UPDATE mentor_students
    SET
    mentors_id = $/mentors_id/,
    WHERE id = $/id/ AND students_id = $/students_id/
    RETURNING *`,
      mentorStudent
    );
  },
  delete(id) {
    return db.none("DELETE FROM mentor_students WHERE id = $1", id);
  },
};
