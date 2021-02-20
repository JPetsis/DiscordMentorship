const db = require("../config/connection");

module.exports = {
  findAll() {
    return db.many("SELECT * FROM student_tags");
  },
  findById(id) {
    return db.one("SELECT * FROM student_tags WHERE id = $1", id);
  },
  findByStudentsId(data) {
    return db.one("SELECT * FROM student_tags WHERE students_id = $1", data);
  },
  findByTagsId(data) {
    return db.one("SELECT * FROM student_tags WHERE tags_id = $1", data);
  },
  save(studentTag) {
    return db.one(
      `INSERT INTO student_tags (id) 
      VALUES ($/id/)
      RETURNING *`,
      studentTag
    );
  },
  update(studentTag) {
    return db.one(
      `UPDATE student_tags
    SET
    id = $/id/,
    WHERE id = $/id/
    RETURNING *`,
      studentTag
    );
  },
  delete(id) {
    return db.none("DELETE FROM student_tags WHERE id = $1", id);
  },
};
