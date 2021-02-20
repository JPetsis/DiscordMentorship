const db = require("../config/connection");

module.exports = {
  findAll() {
    return db.many("SELECT * FROM mentor_tags");
  },
  findById(id) {
    return db.one("SELECT * FROM mentor_tags WHERE id = $1", id);
  },
  findByMentorsId(data) {
    return db.one("SELECT * FROM mentor_tags WHERE mentors_id = $1", data);
  },
  findByTagsId(data) {
    return db.one("SELECT * FROM mentor_tags WHERE tags_id = $1", data);
  },
  save(mentorTag) {
    return db.one(
      `INSERT INTO mentor_tags (id) 
      VALUES ($/id/)
      RETURNING *`,
      mentorTag
    );
  },
  update(mentorTag) {
    return db.one(
      `UPDATE mentor_tags
    SET
    id = $/id/,
    WHERE id = $/id/
    RETURNING *`,
      mentorTag
    );
  },
  delete(id) {
    return db.none("DELETE FROM mentor_tags WHERE id = $1", id);
  },
};
