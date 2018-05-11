const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let guild = bot.guilds.find(`id`, "443867131721941005");;
	let member = await guild.fetchMember(message.author.id)
	if (!member) return;
	if (member && member.roles.get("443867603103121410")) { //developer
if (bot.counter === false) {
bot.user.setActivity(`${bot.guilds.size} servers`, {type: "WATCHING"});
      message.react("\u2705")
      bot.counter = true

    } else if (bot.counter === true) {
            bot.user.setActivity("for !help", {type: "WATCHING"});
                message.react("\u2705")

      bot.counter = false
}
}
}

module.exports.help = {
    name: "countstatus"
}
