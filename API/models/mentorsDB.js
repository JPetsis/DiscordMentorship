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
  save(mentors) {
    return db.one(
      `INSERT INTO mentors (id, created_at) 
      VALUES ($/id/, $/created_at/)
      RETURNING *`,
      mentors
    );
  },
  delete(id) {
    return db.none("DELETE FROM mentors WHERE id = $1", id);
  },
};
