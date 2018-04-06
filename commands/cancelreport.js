const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	let channel = bot.channels.find(`id`, "411246419979141121")
	let amessages = await channel.fetchMessages( {limit: 100} )
	let bmessages = amessages.filter(m => m.embeds[0] && m.embeds[0].fields && m.embeds[0].fields[5].value === message.author.id)
	let delmessage = bmessages.first()
  if(delmessage) {
	await delmessage.delete()
    message.react("\u2705")
	  let mod = bot.channels.find(`id`, "418531258344275978")
 let thing = new Discord.RichEmbed()
	.setTitle("Cancelled Report")
 .setColor("#FF0000")
 .addField("Time Cancelled", message.createdAt)
	.addField("Canceller", message.author.tag)
	.addField("Canceller ID", message.author.id)
 await mod.send(thing)
  }
  if(!delmessage) {
  return message.reply("You do not have any unread reports!")
}

 }

module.exports.help = {
    name: "cancelreport"
}
