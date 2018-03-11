const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


message.reply(`${bot.guilds.size} servers!`)




}
module.exports.help = {
      name: "count"
  }
