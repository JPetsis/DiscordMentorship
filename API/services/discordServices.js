const axios = require('axios');
const qs = require('querystring');
const btoa = require('btoa');
const services = {};

services.getToken = (code, redirect) => {
    const creds = btoa(`${process.env.DISCORD_CLIENT_ID}:${process.env.DISCORD_CLIENT_SECRET}`);
    const data = {
        grant_type: "authorization_code",
        code: code,
        redirect_url: redirect
    };
    const config = {
        headers: { "Authorization": `Basic ${creds}` }
    };

    return axios.post("https://discordapp.com/api/oauth2/token", qs.stringify(data), config);
};

services.refresh_token = (refresh_token) => {
    const data = {
        grant_type: "refresh_token",
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        scope: 'identify email messages.read',
        refresh_token: refresh_token,
        redirect_url: process.env.DISCORD_BACKEND_REDIRECT
    };
    const config = {
        headers: { "Content-Type": 'application/x-www-form-urlencoded' }
    };

    return axios.post("https://discordapp.com/api/oauth2/token", qs.stringify(data), config);
}

services.getUserInfo = (data) => {
    return axios({
        method: "GET",
        url: "https://discordapp.com/api/users/@me",
        headers: { "Authorization": `Bearer ${data}` }
    });
};

module.exports = services;