const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	var guild = bot.guilds.find("id", "400508946709872660");
	var member = await guild.fetchMember(message.author.id);
	var allowedRoles = ["400523390441619457", "400512010590355458", "415914501909774336", "400511826745360405", "400511217061330955"];
	// head, admin, comanager, owner
	if (!member) return;
	if (message.member.roles.some(r => allowedRoles.includes(r.id))) {
		var channel = bot.channels.find(`id`, "444588561858035723");
		var pingeduser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
		var userid = args[0];
		var messages = await channel.fetchMessages({ limit: 100 });
		var blacklistEmbed = new Discord.RichEmbed().setTitle("Blacklisted User").setColor("#FF0000");
		if (!pingeduser) {
			var auser = messages.find(m => m.content === userid);

			if (!auser) {
				var userob = await bot.fetchUser(userid);
				if (!userob) return message.reply("Couldn't find this user!").catch(function() {});
				channel.send(`${userid}`).catch(function() {});
				message.react("\u2705").catch(function() {});
				var mod = bot.channels.find(`id`, "444634075836448768")
				blacklistEmbed = blacklistEmbed
					.addField("Time Blacklisted", message.createdAt)
					.addField("Moderator", message.author)
					.addField("User Blacklisted", userob.tag);
				await mod.send({ embed: blacklistEmbed }).catch(function() {});
			} else return message.reply("This user is already blacklisted!").catch(function() {});
		} else {
			var buser = messages.find(m => m.content === pingeduser.id);
			if (!buser) {
				var userob = await bot.fetchUser(pingeduser.id);
				if (!userob) message.reply("Couldn't find this user!").catch(function() {});
				channel.send(`${pingeduser.id}`).catch(function() {});
				message.react("\u2705").catch(function() {});
				var mod = bot.channels.find(`id`, "444634075836448768");
				blacklistEmbed = blacklistEmbed
					.addField("Time Blacklisted", message.createdAt)
					.addField("Moderator", message.author)
					.addField("Blacklisted", userob.tag)
					.addField("Blacklisted ID", userob.id);
				await mod.send({ embed: blacklistEmbed }).catch(function() {});
			} else return message.reply("This user is already blacklisted!").catch(function() {});
		}
	}
}

module.exports.help = {
	name: "blacklist"
}
