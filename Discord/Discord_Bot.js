const Discord = require('discord.js');
const chalk = require('chalk');
const fs = require('fs');
const bot = new Discord.Client();

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.config = new Discord.Collection();

fs.readdir('./commands', (err, files) => {
    if(err) console.error(err);
    let jsfile = files.filter(f => f.split('.').pop() === 'js');
    if(jsfile.length <= 0)
        return console.error(chalk.hex('#ff9900')('[LOG]') + "Couldn't find commands");
    
    jsfile.forEach((file, idx) => {
        let pull = require(`./commands/${file}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => bot.aliases.set(alias, pull.config.name));
    });
});

console.log(chalk.hex('#ff00ff')("[LOG]") + " Commands Set");

bot.on("ready", () => require('./controllers/DiscordEvents/onReady')(bot));
bot.on("message", (message) => require('./controllers/DiscordEvents/onMessage')(bot, message));
bot.on('error', (err) => require('./controllers/DiscordEvents/onError')(bot, err));

module.exports = bot;