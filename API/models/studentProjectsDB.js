const db = require("../config/connection");

module.exports = {
  findAll() {
    return db.many("SELECT * FROM student_projects");
  },
  findById(id) {
    return db.one("SELECT * FROM student_projects WHERE id = $1", id);
  },
  findByStudentId(data) {
    return db.one(
      "SELECT * FROM student_projects WHERE students_id = $1",
      data
    );
  },
  save(studentProject) {
    return db.one(
      `INSERT INTO student_projects (students_id, created_at) 
      VALUES ($/students_id/, $/created_at/)
      RETURNING *`,
      studentProject
    );
  },
  update(studentProject) {
    return db.one(
      `UPDATE student_projects
    SET
    link = $/link/,
    description = $/description/,
    title = $/title/
    WHERE id = $/id/ AND students_id = $/students_id/
    RETURNING *`,
      studentProject
    );
  },
  delete(id) {
    return db.none("DELETE FROM student_projects WHERE id = $1", id);
  },
};
