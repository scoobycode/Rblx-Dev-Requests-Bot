const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let guild = bot.guilds.find(`id`, "443867131721941005");;
	let member = await guild.fetchMember(message.author.id)
	if (!member) return;
	if (member && member.roles.get("443898332029517824") //helper
 	|| member.roles.get("443903247502147596") //moderator
 	|| member.roles.get("443867603103121410")) { //developer
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
		      let mod = bot.channels.find(`id`, "444634075836448768")
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
