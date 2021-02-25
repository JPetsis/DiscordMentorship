const jwt = require('jsonwebtoken');

module.exports = (req, user) => {
    const payload = {
        id: user.id,
        username: user.username,
        discriminator: user.discriminator,
        discord_id: user.discord_id,
        avatar: user.avatar
    };

    const token = jst.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: "12h"
    });
    payload.token = token;
    resizeBy.json({ data: payload });
};