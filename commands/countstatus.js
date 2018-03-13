const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

if((message.author.id === "291367352476631040") && (bot.counter === false)) {
bot.user.setActivity(`${bot.guilds.size} servers`, {type: "WATCHING"});
      message.react("\u2705")
      bot.counter = true
} else if((message.author.id === "245877990938902529") && (bot.counter === false)) {
bot.user.setActivity(`${bot.guilds.size} servers`, {type: "WATCHING"});
      message.react("\u2705")
      bot.counter = true
    } else if ((message.author.id === "291367352476631040") && (bot.counter === true))
            bot.user.setActivity("for !help", {type: "WATCHING"});
      bot.counter = false
}     else if ((message.author.id === "245877990938902529") && (bot.counter === true))
            bot.user.setActivity("for !help", {type: "WATCHING"});
      bot.counter = false

}

module.exports.help = {
    name: "countstatus"
}
