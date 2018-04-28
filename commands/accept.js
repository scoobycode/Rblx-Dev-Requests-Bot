const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let guild = bot.guilds.find(`id`, "400508946709872660");;
	let member = await guild.fetchMember(message.author.id)
	let allowedRoles = ["400523390441619457", "400512010590355458", "415914501909774336", "400511826745360405", "400511217061330955"];
	// head, admin, comanager, owner
	if (!member) return;
	if (message.member.roles.some(r => allowedRoles.includes(r.id))) {
		let casenumber = args[0];
		if (!casenumber) return message.reply("Please provide a case number!");
		let channel = bot.channels.find(`id`, "411246419979141121");
		let amessages = await channel.fetchMessages({ limit: 100 });
		let delmessage = amessages.filter(m => m.embeds[0] && m.embeds[0].fields && m.embeds[0].fields[0].value === casenumber).first();
		let userid = delmessage.embeds[0].fields[5].value
		let user = await bot.fetchUser(userid);
		if (!user) return message.reply("Couldn't find user!");
		try {
			await user.send(":white_check_mark: **Scam Report Accepted -- After reviewing your report, our moderators and admins have decided this is a valid scam report. This user will be added to our database shortly.** :white_check_mark:");
			message.react("✅");
			let mod = bot.channels.find(`id`, "418531258344275978")
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
