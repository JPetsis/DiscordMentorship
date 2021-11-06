const db = require("../config/connection");

module.exports = {
  findAll() {
    return db.many("SELECT * FROM mentor_projects");
  },
  findById(id) {
    return db.one("SELECT * FROM mentor_projects WHERE id = $1", id);
  },
  findByMentorId(data) {
    return db.one("SELECT * FROM mentor_projects WHERE mentors_id = $1", data);
  },
  save(mentorProject) {
    return db.one(
      `INSERT INTO mentor_projects (mentors_id, created_at) 
      VALUES ($/mentors_id/, $/created_at/)
      RETURNING *`,
      mentorProject
    );
  },
  update(mentorProject) {
    return db.one(
      `UPDATE mentor_projects
    SET
    link = $/link/,
    description = $/description/,
    title = $/title/
    WHERE id = $/id/ AND mentors_id = $/mentors_id/
    RETURNING *`,
      mentorProject
    );
  },
  delete(id) {
    return db.none("DELETE FROM mentor_projects WHERE id = $1", id);
  },
};
