module.exports.run = async (bot, PREFIX, message, args) => {
    message.channel.send("Pong");
}; 

module.exports.config = {
    name: "ping",
    aliases: []
};