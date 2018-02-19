const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let tbh = args.join(" ")
bot.user.setActivity(`${tbh}`, {type: "PLAYING"});

}

module.exports.help = {
    name: "setstatus"
}
