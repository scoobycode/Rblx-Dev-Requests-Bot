const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let guild = bot.guilds.find(`id`, "400508946709872660")
let member = await guild.fetchMember(message.author.id)
if(!member) return;
if (member.roles.get("400523390441619457") //mod
 || member.roles.get("400512010590355458") //admin
 || member.roles.get("415914501909774336") //head admin
 || member.roles.get("400511826745360405") //comanager
 || member.roles.get("400511217061330955")) { //owner 
      let channel = bot.channels.find(`id`, "425802196790280203")
	let userid = args[0]
   let guild = bot.guilds.find(`id`, userid)
  if(!guild) return message.reply("Guild not found!")
	let messages = await channel.fetchMessages({ limit: 100 })

      if(userid) {
      	      let barray = messages.filter(m => RegExp(userid, "gi").test(m.content));
	      let auser = barray.first();
	      if(auser) {
		     auser.delete()
		     message.react("\u2705")
		      let mod = bot.channels.find(`id`, "418531258344275978")

 let thing = new Discord.RichEmbed()
	.setTitle("Unblacklisted Guild")
 .setColor("#FF0000")
 .addField("Time Unblacklisted", message.createdAt)
	.addField("Moderator", message.author)
	.addField("Guild Unlacklisted", guild.name)
  .addField("Guild ID", guild.id)
 await mod.send(thing)
	      } else return message.reply("This guild is not blacklisted!")
      
      }
}

}

module.exports.help = {
	name: "guildunblacklist"
}
