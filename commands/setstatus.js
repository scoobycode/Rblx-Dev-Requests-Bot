const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let tbh = args.join(" ")

if(message.author.id === "291367352476631040") {
bot.user.setActivity(`${tbh}`, {type: `${bot.ActivityType}}`);
      message.react("\u2705")
} else if(message.author.id === "245877990938902529") {
bot.user.setActivity(`${tbh}`, {type: "PLAYING"});
      message.react("\u2705")
    }

}

module.exports.help = {
    name: "setstatus"
}
