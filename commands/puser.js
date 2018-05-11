const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if(message.author.id !== "245877990938902529" && message.author.id !== "291367352476631040") return;

let mentioneduser = message.mentions.users.first()
if(!mentioneduser) return message.reply("Please mention a user!")
let userschannel = bot.channels.find(`id`, "444588564056113162")
let pusers = await userschannel.fetchMessages({
        limit: 100
})
let usercheck = pusers.find(m => m.content === mentioneduser.id)
if(usercheck) {
  await usercheck.delete()
  return message.reply("Removed this user's premium.")
}
                await userschannel.send(mentioneduser.id)
                await message.reply("Successfully given this user premium!")

}
module.exports.help = {
  	name: "puser"
  }
