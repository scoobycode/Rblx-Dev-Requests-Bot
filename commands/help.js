const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
	let guild = bot.guilds.find(`id`, "400508946709872660")
let member = await guild.fetchMember(message.author.id)
//if(!member) return;
if (member.roles.get("400523390441619457") //mod
 || member.roles.get("400512010590355458") //admin
 || member.roles.get("415914501909774336") //head admin
 || member.roles.get("400511826745360405") //comanager
 || member.roles.get("400511217061330955")) { //owner 
	let helpera = new Discord.RichEmbed()
	.setTitle("Commands")
	.addField("Public", "\`!report\` - Starts a prompt to report a scammer and send that prompt to the RDR server\n\`!invite\` - Sends you my invite\n\`!server\` - Sends you the invite to the RDR server\n\`!updates\` - Gives you our latest updates to the bot\nGives you our bot's server count\n\`!scamcheck\` - Tells you whether the username you provided is in our scam database or not")
	.addField("Moderator+", "\`!accept\` - Accepts a user's scam report\n\`!decline\` - Declines a user's scam report\n\`!addscammer\` - Adds a scammer to the scammers database\n\`!removescammer\` - Removes a scammer from the scammers database\n\`!blacklist\` - Blacklists a user from using the report command\n\`!unblacklist\` - Unblacklists a user from using the report command\n\`!guildblacklist\` - Blacklists a server from using the report command\n\`!guildunblacklist\` - Unblacklists a server from using the report command\n\`!open\` - Opens up the report command\n\`!close\` - Closes the report command")
	.addField("Co-Owner+", "\`!setstatus\` - Sets the bot's status\n\`!setactivity\` - Sets the bot's activity\n\`!countstatus\` - Sets the bot's status to the server count\n\`!setupdates\` - Sets up the update command response")
	try
	{
	await message.author.send(helpera)
	}
	catch (e) {
		return message.reply("I could not DM you the list of commands! Please check your privacy settings and try again!")
	}
		message.react("\u2705")


} else {
	let helper = new Discord.RichEmbed()
	.setTitle("Commands")
	.addField("!report", "Starts a prompt to report a scammer and send that prompt to the RDR server")
	.addField("!invite", "Sends you my invite")
	.addField("!server", "Sends you the invite to the RDR server")
	.addField("!updates", "Gives you our latest updates to the bot")
	.addField("!count", "Gives you our bot's server count")
	.addField("!scamcheck", "Tells you whether the username you provided is in our scam database or not");
	try {
	await message.author.send(helper)
	}
	catch (e) {
		return message.reply("I could not DM you the list of commands! Please check your privacy commands and try again!")
	}
		message.react("\u2705")

}
}
module.exports.help = {
	name: "help"
}
