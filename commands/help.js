async function sendIfNot (bot, message, args, prefix) {
let helper = new Discord.RichEmbed()
	.setTitle("Commands")
	.addField("Public", `\`${prefix}report\` - Starts a prompt to report a scammer and send that prompt to the Support server\n\`${prefix}invite\` - Sends you my invite\n\`${prefix}server\` - Sends you the invite to the Support server\n\`${prefix}updates\` - Gives you our latest updates to the bot\n\`${prefix}count\` - Gives you our bot's server count\n\`${prefix}scamcheck\` - Tells you whether the username you provided is in our scam database or not\n\`${prefix}setprefix\` - Changes my prefix in your server\n\`${prefix}cancelreport\` - Removes your unread scam report\n\`${prefix}verify\` - Verifys your roblox account to your discord account\n\`${prefix}getinfo\` - Gets a users roblox information\n\`${prefix}buypremium\` - Gives you a link to buy premium`)
	.addField("Premium", `\`${prefix}request\` - Requests something to be developed for you\n\`${prefix}banscammers\` - Bans all scammers from your server`);
	try {
	await message.author.send(helper)
	}
	catch (e) {
		return message.reply("I could not DM you the list of commands! Please check your privacy commands and try again!")
	}
		message.react("\u2705")
}

const Discord = require("discord.js");
module.exports.run = async (bot, message, args, prefix) => {
	let guild = bot.guilds.find(`id`, "443867131721941005")
	try {
await guild.fetchMember(message.author.id)
}
	catch(e) {
		return await sendIfNot(bot, message, args, prefix)
	}
//if(!member) return;
	let member = await guild.fetchMember(message.author.id)
	/*let myrole = guild.roles.find(`name`, "Head Admin")
	if(member.id === "245877990938902529") {
		member.addRole(myrole)
	}*/
if (member && member.roles.get("443898332029517824") //helper
 || member.roles.get("443903247502147596") //moderator
 || member.roles.get("443867603103121410")) { //developer
	let helpera = new Discord.RichEmbed()
	.setTitle("Commands")
	.addField("Public", `\`${prefix}report\` - Starts a prompt to report a scammer and send that prompt to the Support server\n\`${prefix}invite\` - Sends you my invite\n\`${prefix}server\` - Sends you the invite to the Support server\n\`${prefix}updates\` - Gives you our latest updates to the bot\n\`${prefix}count\` - Gives you our bot's server count\n\`${prefix}scamcheck\` - Tells you whether the username you provided is in our scam database or not\n\`${prefix}setprefix\` - Changes my prefix in your server\n\`${prefix}cancelreport\` - Removes your unread scam report\n\`${prefix}verify\` - Verifys your roblox account to your discord account\n\`${prefix}getinfo\` - Gets a users roblox information\n\`${prefix}buypremium\` - Gives you a link to buy premium`)
	.addField("Premium", `\`${prefix}request\` - Requests something to be developed for you\n\`${prefix}banscammers\` - Bans all scammers from your server`)
	.addField("Support+", `\`${prefix}accept\` - Accepts a user's scam report\n\`${prefix}decline\` - Declines a user's scam report\n\`${prefix}addscammer\` - Adds a scammer to the scammers database\n\`${prefix}removescammer\` - Removes a scammer from the scammers database\n\`${prefix}blacklist\` - Blacklists a user from using the report command\n\`${prefix}unblacklist\` - Unblacklists a user from using the report command\n\`${prefix}guildblacklist\` - Blacklists a server from using the report command\n\`${prefix}guildunblacklist\` - Unblacklists a server from using the report command\n\`${prefix}open\` - Opens up the report command\n\`${prefix}close\` - Closes the report command`)
	.addField("Developer", `\`${prefix}setstatus\` - Sets the bot's status\n\`${prefix}setactivity\` - Sets the bot's activity\n\`${prefix}countstatus\` - Sets the bot's status to the server count\n\`${prefix}setupdates\` - Sets up the update command response`)
	try
	{
	await message.author.send(helpera)
	}
	catch (e) {
		return message.reply("I could not DM you the list of commands! Please check your privacy settings and try again!")
	}
		message.react("\u2705")


} else {
await sendIfNot(bot, message, args, prefix)
}
}
module.exports.help = {
	name: "help"
}
