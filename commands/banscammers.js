const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (message.member.hasPermission("BAN_MEMBERS")) {
		var premiumUsers = await bot.channels.get("433791777468841996").fetchMessages({
			limit: 100
		});
		premiumUsers = premiumUsers.map(user => user.content);
		if (premiumUsers.includes(message.author.id)) {
			message.reply("Attempting to ban all scammers from this server (if any).")
			var scammers = await bot.channels.get("420745256439513089").fetchMessages({
				limit: 100
			});
			scammers = scammers.map(user => user.content);
			bot.channels.get("423189481349185547").fetchMessages({
				limit: 100
			}).then(messages => {
				messages.forEach(async function(msg) {
					bot.fetchUser(msg.content.split(" ")[1]).then(user => {
						if (scammers.includes(user.id)) {
							msg.guild.fetchMember(user.id).then(member => {
								member.ban();
							});
						}
					}).catch(function() {});
				});
			});
		} else {
			message.reply("This is a premium only command. You are not premium.").catch(() => {
				message.author.send(`You attempted to use the \`banscammers\` command in ${message.channel}, but I can not chat there.`).catch(function() {});
			});
		}
	} else {
		message.reply("You do not have permission to use this command").catch(() => {
			message.author.send(`You attempted to use the \`banscammers\` command in ${message.channel}, but I can not chat there.`).catch(function() {});
		});
	}
}
module.exports.help = {
	name: "banscammers"
}
