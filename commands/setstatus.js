const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let tbh = args.join(" ")
return message.channel.send(`${bot.ActivityType.toUpperCase()}`);
if(message.author.id === "291367352476631040") {
bot.user.setActivity(`${tbh}`, {type: `${bot.user.presence.ActivityType}`});
      message.react("\u2705")
} else if(message.author.id === "245877990938902529") {
bot.user.setActivity(`${tbh}`, {type: `${bot.user.presence.ActivityType}`});
      message.react("\u2705")
    }

}

module.exports.help = {
    name: "setstatus"
}
