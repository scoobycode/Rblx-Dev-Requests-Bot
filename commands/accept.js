const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let guild = bot.guilds.find(`id`, "443867131721941005");;
	let member = await guild.fetchMember(message.author.id)
	if (!member) return;
	if (member && member.roles.get("443898332029517824") //helper
 	|| member.roles.get("443903247502147596") //moderator
 	|| member.roles.get("443867603103121410")) { //developer		
	let casenumber = args[0];
		if (!casenumber) return message.reply("Please provide a case number!");
		let channel = bot.channels.find(`id`, "444633860769185832");
		let amessages = await channel.fetchMessages({ limit: 100 });
		let delmessage = amessages.find(m => m && m.embeds && m.embeds[0] && m.embeds[0].fields && m.embeds[0].fields[0].value === casenumber);
		if(!delmessage) return message.reply("Please provide a correct case number!")
		let userid = delmessage.embeds[0].fields[5].value
		let user = await bot.fetchUser(userid);
		if (!user) return message.reply("Couldn't find user!");
		try {
			 var hmmtho = new Discord.RichEmbed()
        .setColor("#0000FF")
        .setDescription(":white_check_mark: **Scam Report Accepted -- After reviewing your report, our moderators and admins have decided this is a valid scam report. This user will be added to our database shortly.** :white_check_mark:")
        message.author.send(hmmtho);
			message.react("✅");
			let mod = bot.channels.find(`id`, "444634075836448768")
			const acceptedReport = new Discord.RichEmbed()
				.setTitle("Accepted Report")
				.setColor("#FF0000")
				.addField("Time Accepted", message.createdAt)
				.addField("Moderator", message.author)
				.addField("Accepted", user.tag)
				.addField("Accepted ID", user.id)

			await mod.send({ embed: acceptedReport });
		} catch (e) {
			message.reply("Couldn't DM this user!")
		}
		if (delmessage) delmessage.delete().catch(function() {});
	}

}

module.exports.help = {
	name: "accept"
}
