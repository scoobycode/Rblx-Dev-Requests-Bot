const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	let channel = bot.channels.find(`id`, "411246419979141121")
	let amessages = await channel.fetchMessages( {limit: 100} )
	let bmessages = amessages.filter(m => m.embeds && m.embeds[0].fields && m.embeds[0].fields[2].value === message.author.id)
	let delmessage = bmessages.first()
  if(delmessage) {
	await delmessage.delete()
    message.react("\u2705")
  }
  if(!delmessage) {
  return message.reply("You do not have any unread reports!")
}

 }

module.exports.help = {
    name: "cancelreport"
}
