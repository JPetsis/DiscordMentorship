const discordServices = require('../services/discordServices');
const discordTokensDB = require('../models/discordTokensDB');
const discordTokensController = require('./dbControllers/discordTokensController');
const usersController = require('./dbControllers/usersController');
const issueToken = require('../middleware/issueToken');
const moment = require('moment');

module.exports.login = (req, res, next) => {
    const loginData = {};

    discordServices.getToken(req.body.code, process.env.DISCORD_BACKEND_REDIRECT)
    .then(discordToken => getDiscordUserInfo(discordToken.data))
    .catch(err => next(err));

    function getDiscordUserInfo(discordToken) {
        console.log("Getting Discord User Info");
        loginData.discordToken = discordToken;
        discordServices.getUserInfo(discordToken.access_token)
        .then(discordUser => checkForToken(discordUser.data))
        .catch(err => next(err));
    };

    function checkForToken(discordUser) {
        loginData.discordUser = discordUser;
        discordTokensController.getByDiscordId(discordUser.id, updateToken, () => {
            let data = {
                discord_id: discordUser.id,
                access_token: loginData.discordToken.access_token,
                refresh_token: loginData.discordToken.refresh_token,
                expires_in: loginData.discordToken.expires_in,
            };
            discordTokensController.save(data, checkForUser);
        });
    };

    function updateToken(token) {
        let data = {
            discord_id: token.discord_id,
            access_token: loginData.discordToken.access_token,
            refresh_token: loginData.discordToken.refresh_token,
            expires_in: loginData.discordToken.expires_in,
            issued_at: moment()
        };
        discordTokensController.update(data, checkForUser);
    };

    function checkForUser() {
        usersController.getByDiscordId(loginData.discordUser.id, sendToken, () => {
            let data = {
                discord_id: loginData.discordUser.id,
                email: loginData.discordUser.email,
                created_at: moment()
            };
            usersController.save(data, sendToken);
        });
    };

    function sendToken(user) {
        user.username = loginData.discordUser.username;
        user.discriminator = loginData.discordUser.discriminator;
        user.avatar = loginData.discordUser.avatar;
        issueToken(res, user);
    };
};

module.exports.logout = (req, res, next) => {
    discordTokensDB.delete(req.body.discord_id)
    .then(() => res.json({ message: "Logged Out" }))
    .catch(err => next(err));
};
