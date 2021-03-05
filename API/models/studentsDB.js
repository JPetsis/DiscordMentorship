const db = require("../config/connection");

module.exports = {
  findAll() {
    return db.many("SELECT * FROM students");
  },
  findById(id) {
    return db.one("SELECT * FROM students WHERE id = $1", id);
  },
  findByUserId(data) {
    return db.one("SELECT * FROM students WHERE users_id = $1", data);
  },
  save(student) {
    return db.one(
      `INSERT INTO students (users_id, created_at) 
      VALUES ($/users_id/, $/created_at/)
      RETURNING *`,
      student
    );
  },
  update(student) {
    return db.one(
      `UPDATE students
    SET
    active = $/active/,
    bio = $/bio/
    WHERE id = $/id/ AND users_id = $/users_id/
    RETURNING *`,
      student
    );
  },
  delete(id) {
    return db.none("DELETE FROM students WHERE id = $1", id);
  },
};
