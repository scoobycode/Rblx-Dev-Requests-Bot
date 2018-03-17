const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let userid = args[0]
if(!userid) return message.reply("Please provide a user ID!")
let user = await bot.fetchUser(userid)
if(!user) return message.reply("Couldn't find user!")
try {
user.send("congrats")
}
catch (e) {
message.reply("Couldn't DM this user!")
}


 }

module.exports.help = {
    name: "accept"
}
