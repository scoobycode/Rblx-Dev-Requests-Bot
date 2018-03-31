const Discord = require("discord.js");
module.exports.run = async (bot, message, args, prefix) => {
	let guild = bot.guilds.find(`id`, "400508946709872660")
let member = await guild.fetchMember(message.author.id)
//if(!member) return;
if (member && member.roles.get("400523390441619457") //mod
 || member.roles.get("400512010590355458") //admin
 || member.roles.get("415914501909774336") //head admin
 || member.roles.get("400511826745360405") //comanager
 || member.roles.get("400511217061330955")) { //owner 
	let helpera = new Discord.RichEmbed()
	.setTitle("Commands")
	.addField("Public", `\`${prefix}report\` - Starts a prompt to report a scammer and send that prompt to the RDR server\n\`${prefix}invite\` - Sends you my invite\n\`${prefix}server\` - Sends you the invite to the RDR server\n\`${prefix}updates\` - Gives you our latest updates to the bot\nGives you our bot's server count\n\`${prefix}scamcheck\` - Tells you whether the username you provided is in our scam database or not\n\`${prefix}prefix\` - Changes my prefix in your server`)
	.addField("Moderator+", `\`${prefix}accept\` - Accepts a user's scam report\n\`${prefix}decline\` - Declines a user's scam report\n\`${prefix}addscammer\` - Adds a scammer to the scammers database\n\`${prefix}removescammer\` - Removes a scammer from the scammers database\n\`${prefix}blacklist\` - Blacklists a user from using the report command\n\`${prefix}unblacklist\` - Unblacklists a user from using the report command\n\`${prefix}guildblacklist\` - Blacklists a server from using the report command\n\`${prefix}guildunblacklist\` - Unblacklists a server from using the report command\n\`${prefix}open\` - Opens up the report command\n\`${prefix}close\` - Closes the report command`)
	.addField("Co-Owner+", `\`${prefix}setstatus\` - Sets the bot's status\n\`${prefix}setactivity\` - Sets the bot's activity\n\`${prefix}countstatus\` - Sets the bot's status to the server count\n\`${prefix}setupdates\` - Sets up the update command response`)
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
	.addField(`${prefix}report`, `Starts a prompt to report a scammer and send that prompt to the RDR server`)
	.addField(`${prefix}invite`, `Sends you my invite`)
	.addField(`${prefix}server`, `Sends you the invite to the RDR server`)
	.addField(`${prefix}updates`, `Gives you our latest updates to the bot`)
	.addField(`${prefix}count`, `Gives you our bot\`s server count`)
	.addField(`${prefix}prefix`, `Changes my prefix in your server`)
	.addField(`${prefix}scamcheck`, `Tells you whether the username you provided is in our scam database or not`);
	
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
