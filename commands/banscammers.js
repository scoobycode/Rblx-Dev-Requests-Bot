const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (message.member.hasPermission("BAN_MEMBERS")) {
		var premiumUsers = await bot.channels.get("444588564056113162").fetchMessages({ limit: 100 });
		premiumUsers = premiumUsers.map(user => user.content);
		if (premiumUsers.includes(message.author.id)) {
			if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return message.reply("I do not have permissions to ban members in this server.").catch(function() {});
			message.reply("Attempting to ban all scammers from this server (if any).")
			var scammers = await bot.channels.get("420745256439513089").fetchMessages({ limit: 100 });
			scammers = scammers.map(user => user.content);
			var verifiedPeople = await bot.channels.get("423189481349185547").fetchMessages({ limit: 100 });
			verifiedPeople = verifiedPeople.map(user => user.content.split(" "));
			var membersToBan = verifiedPeople.filter(user => scammers.includes(user[1]));
			membersToBan.forEach(member => {
				message.guild.ban(member[0]).catch(function() {});
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
