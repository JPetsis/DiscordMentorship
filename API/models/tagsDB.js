const db = require("../config/connection");

module.exports = {
  findAll() {
    return db.many("SELECT * FROM tags");
  },
  findById(id) {
    return db.one("SELECT * FROM tags WHERE id = $1", id);
  },
  findByName(data) {
    return db.one("SELECT * FROM tags WHERE name = $1", data);
  },
  save(tag) {
    return db.one(
      `INSERT INTO tags (name, created_at) 
      VALUES ($/name/, $/created_at/)
      RETURNING *`,
      tag
    );
  },
  update(tag) {
    return db.one(
      `UPDATE tags
    SET
    name = $/name/,
    updated_at = $/updated_at/
    WHERE id = $/id/
    RETURNING *`,
      tag
    );
  },
  delete(id) {
    return db.none("DELETE FROM tags WHERE id = $1", id);
  },
};
