const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
      let guild = bot.guilds.find(`id`, "443867131721941005");;
	let member = await guild.fetchMember(message.author.id)
	if (!member) return;
	if (member && member.roles.get("443867603103121410")) { //developer
let tbh = args.join(" ").toUpperCase()

bot.user.setActivity(`${bot.user.presence.game.name}`, {type: `${tbh}`});
      message.react("\u2705")

}
}

module.exports.help = {
    name: "setactivity"
}
