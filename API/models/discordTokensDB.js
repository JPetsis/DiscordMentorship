const db = require('../config/connection');

module.exports = {
    findOne(id) {
        return db.one('SELECT * FROM discord_tokens WHERE id = $1', id);
    },
    findByDiscordId(id) {
        return db.one('SELECT * FROM discord_tokens WHERE discord_id = $1', id);
    },
    findByToken(token) {
        return db.one('SELECT * FROM discord_tokens WHERE access_token = $1', token);
    },
    save(token) {
        return db.one(`INSERT INTO discord_tokens (discord_id, access_token, refresh_token, expires_in, issued_at)
        VALUES ($/discord_id/, $/access_token/, $/refresh_token/, $/expires_in/, $/issued_at/)
        RETURNING *`, token);
    },
    update(token) {
        return db.one(`UPDATE discord_tokens
        SET
        access_token = $/access_token/,
        refresh_token = $/refresh_token/,
        expires_in = $/expires_in/,
        issued_at = $/issued_at/
        WHERE discord_id = $/discord_id/
        RETURNING *`, token);
    },
    delete(id) {
        return db.none('DELETE FROM discord_tokens WHERE discord_id = $1', id);
    }
};