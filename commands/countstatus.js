const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let guild = bot.guilds.find(`id`, "400508946709872660")
let member = await guild.fetchMember(message.author.id)
if(!member) return;
if (member.roles.get("400511826745360405") //comanager
 || member.roles.get("400511217061330955")) { //owner 
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
