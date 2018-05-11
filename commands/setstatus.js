const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
     let guild = bot.guilds.find(`id`, "443867131721941005");;
	let member = await guild.fetchMember(message.author.id)
	if (!member) return;
	if (member && member.roles.get("443867603103121410")) { //developer
let tbh = args.join(" ")
bot.user.setActivity(`${tbh}`, {type: bot.user.presence.game.type});
      message.react("\u2705")

}
}

module.exports.help = {
    name: "setstatus"
}
