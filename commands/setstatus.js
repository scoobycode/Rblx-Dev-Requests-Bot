const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
      let guild = bot.guilds.find(`id`, "400508946709872660")
let member = await guild.fetchMember(message.author.id)
if(!member) return;
if (member.roles.get("400511826745360405") //comanager
 || member.roles.get("400511217061330955")) { //owner 
let tbh = args.join(" ")
bot.user.setActivity(`${tbh}`, {type: bot.user.presence.game.type});
      message.react("\u2705")

}
}

module.exports.help = {
    name: "setstatus"
}
