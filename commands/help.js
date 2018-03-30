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
	.addField("!report", "Starts a prompt to report a scammer and send that prompt to the RDR server")
	.addField("!invite", "Sends you my invite")
	.addField("!server", "Sends you the invite to the RDR server")
	.addField("!updates", "Gives you our latest updates to the bot")
	.addField("!count", "Gives you our bot's server count")
	.addField("!scamcheck", "Tells you whether the username you provided is in our scam database or not")
	.addField("!accept", "Accepts a user's scam report")
	.addField("!decline", "Accepts a user's scam report")
	.addField("!addscammer", "Adds a scammer to the scammers database")
	.addField("!removescammer", "Removes a scammer from the scammers database")
	.addField("!blacklist", "Blacklists a user from using the report command")
	.addField("!unblacklist", "Unblacklists a user from using the report command")
	.addField("!guildblacklist", "Blacklists a server from using the report command")
	.addField("!guildunblacklist", "Unblacklists a server from using the report command")
	.addField("!open", "Opens up the report command")
	.addField("!close", "Closes the report command")
	.addField("!setstatus", "Sets the bot's status")
	.addField("!setactivity", "Sets the bot's activity")
	.addField("!countstatus", "Sets the bot's status to the server count")
	.addField("!setupdates", "Sets up the update command response");	

	message.react("\u2705")
	message.author.send(helpera)
} else {
	let helper = new Discord.RichEmbed()
	.setTitle("Commands")
	.addField("!report", "Starts a prompt to report a scammer and send that prompt to the RDR server")
	.addField("!invite", "Sends you my invite")
	.addField("!server", "Sends you the invite to the RDR server")
	.addField("!updates", "Gives you our latest updates to the bot")
	.addField("!count", "Gives you our bot's server count")

	.addField("!scamcheck", "Tells you whether the username you provided is in our scam database or not");
	message.react("\u2705")
	message.author.send(helper)
}
}
module.exports.help = {
	name: "help"
}
