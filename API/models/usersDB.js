const db = require("../config/connection");

module.exports = {
  findAll() {
    return db.many("SELECT * FROM users");
  },
  findById(id) {
    return db.one("SELECT * FROM users WHERE id = $1", id);
  },
  findByDiscordId(id) {
    return db.one("SELECT * FROM users WHERE discord_id = $1", id);
  },
  save(user) {
    return db.one(
      `INSERT INTO users (discord_id, email, created_at) 
      VALUES ($/discord_id/, $/email/, $/created_at/)
      RETURNING *`,
      user
    );
  },
  update(user) {
    return db.one(
      `UPDATE users
      SET
      first_name = $/first_name/,
      last_name = $/last_name/,
      bio = $/bio/,
      linked_in = $/linked_in/,
      github = $/github/,
      portfolio = $/portfolio/,
      last_login = $/last_login/
      WHERE id = $/id/
      RETURNING *`,
      user
    );
  },
  delete(id) {
    return db.none("DELETE FROM users WHERE id = $1", id);
  },
};
