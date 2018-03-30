const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let guild = bot.guilds.find(`id`, "400508946709872660")
let member = await guild.fetchMember(message.author.id)
if(!member) return;
if (member.roles.get("400523390441619457") //mod
 || member.roles.get("400512010590355458") //admin
 || member.roles.get("415914501909774336") //head admin
 || member.roles.get("400511826745360405") //comanager
 || member.roles.get("400511217061330955")) { //owner 
let pchannel = bot.channels.find(`id`, "411246419979141121")
await pchannel.setTopic("open")
 message.react(`✅`)
let mod = bot.channels.find(`id`, "418531258344275978")
let thing = new Discord.RichEmbed()
.setTitle("Reports Opened")
.setColor("#FF0000")
.addField("Time Set", message.createdAt)
.addField("Moderator", message.author)
await mod.send(thing)

}
}

module.exports.help = {
    name: "open"
}
