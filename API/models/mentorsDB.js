const db = require("../config/connection");

module.exports = {
  findAll() {
    return db.many("SELECT * FROM mentors");
  },
  findById(id) {
    return db.one("SELECT * FROM mentors WHERE id = $1", id);
  },
  findByUserId(data) {
    return db.one("SELECT * FROM mentors WHERE users_id = $1", data);
  },
  save(mentor) {
    return db.one(`INSERT INTO mentors (users_id, created_at) 
      VALUES ($/users_id/, $/created_at/)
      RETURNING *`, mentor);
  },
  update(mentor) {
    return db.one(`UPDATE mentors
    SET
    active = $/active/,
    bio = $/bio/
    WHERE id = $/id/ AND users_id = $/users_id/
    RETURNING *`, mentor);
  },
  delete(id) {
    return db.none("DELETE FROM mentors WHERE id = $1", id);
  },
};
