const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let userid = args[0]
if(!userid) return message.reply("Please provide a user ID!")
let user = await bot.fetchUser(userid)
if(!user) return message.reply("Couldn't find user!")
try {
user.send(":white_check_mark: **Scam Report Accepted -- After reviewing your report, our moderators and admins have decided this is a valid scam report. This user will be added to our data base shortly.** :white_check_mark:")
 message.react("✅")
}
catch (e) {
message.reply("Couldn't DM this user!")
}


 }

module.exports.help = {
    name: "accept"
}
