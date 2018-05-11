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
	let channel = bot.channels.find(`id`, "444588563032440833")
	let userid = args[0]
  let guild = bot.guilds.find(`id`, userid)
  if(!guild) return message.reply("Guild not found!")
	let messages = await channel.fetchMessages({ limit: 100 })

      if(userid) {
      	      let auser = messages.find(m => m.content === userid);
	      if(!auser) {
		 	channel.send(`${userid}`)
		      message.react("\u2705")
		      let mod = bot.channels.find(`id`, "418531258344275978")
 let thing = new Discord.RichEmbed()
	.setTitle("Guild Blacklisted")
 .setColor("#FF0000")
 .addField("Time Blacklisted", message.createdAt)
	.addField("Moderator", message.author)
	.addField("Guild Blacklisted", guild.name)
  .addField("Guild ID", guild.id)
 await mod.send(thing)
	      }	else return message.reply("This guild is already blacklisted!")
    
}
}	
}



module.exports.help = {
	name: "guildblacklist"
}
