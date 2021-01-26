const Discord = require('discord.js');
const chalk = require('chalk');
const bot = new Discord.Client();

bot.on("ready", () => require('./controllers/DiscordEvents/onReady')(bot));
bot.on("message", (message) => require('./controllers/DiscordEvents/onMessage')(bot, message));
bot.on('error', (err) => require('./controllers/DiscordEvents/onError')(bot, err));

module.exports = bot;