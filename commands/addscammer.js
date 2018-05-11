const Discord = require("discord.js");
const rbx = require("roblox-js");

module.exports.run = async (bot, message, args) => {
	let guild = bot.guilds.find(`id`, "443867131721941005");;
	let member = await guild.fetchMember(message.author.id)
	if (!member) return;
	if (member && member.roles.get("443898332029517824") //helper
 	|| member.roles.get("443903247502147596") //moderator
 	|| member.roles.get("443867603103121410")) { //developer
		var channel = bot.channels.find(`id`, "444588565154889738");
		var userid = args[0];
		var messages = await channel.fetchMessages({ limit: 100 });
		var post = bot.channels.find(`id`, "424812962872819723");
		if (userid) {
			var errortf = false;
			var user = await rbx.getIdFromUsername(args[0]).catch((err) => {
				errortf = true;
				return message.reply(`${err}. If error persists, contact support by doing !server.`);
			});
			// message.channel.send(user)
			if (errortf === true) return;
			var auser = messages.find(m => m.content === `${user}`);
			if (!auser) {
				channel.send(`${user}`)
				post.send(`**${userid}**, https://www.roblox.com/users/${user}/profile`).catch(function() {});
				message.react("\u2705").catch(function() {});
				var mod = bot.channels.find(`id`, "444634075836448768");
				var addScammerEmbed = new Discord.RichEmbed()
					.setTitle("Scammer Added")
					.setColor("#FF0000")
					.addField("Time Added", message.createdAt)
					.addField("Moderator", message.author)
					.addField("User Added", userid);
				await mod.send(addScammerEmbed).catch(function() {});
			} else return message.reply("This user is already in the scammer database!").catch(function() {});

		}
	}


}

module.exports.help = {
	name: "addscammer"
}
