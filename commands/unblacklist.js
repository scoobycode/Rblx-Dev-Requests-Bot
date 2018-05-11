const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let guild = bot.guilds.find(`id`, "443867131721941005");;
	let member = await guild.fetchMember(message.author.id)
	if (!member) return;
	if (member && member.roles.get("443898332029517824") //helper
 	|| member.roles.get("443903247502147596") //moderator
 	|| member.roles.get("443867603103121410")) { //developer
      let channel = bot.channels.find(`id`, "444588561858035723")
      let pingeduser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	let userid = args[0]
	let messages = await channel.fetchMessages({ limit: 100 })

      if(!pingeduser) {
	      let userob = await bot.fetchUser(userid)
      	      let auser = messages.find(m => m.content === userid);
	      if(auser) {
		     auser.delete()
		     message.react("\u2705")
		      let mod = bot.channels.find(`id`, "444634075836448768")

 let thing = new Discord.RichEmbed()
	.setTitle("Unblacklisted User")
 .setColor("#FF0000")
 .addField("Time Unblacklisted", message.createdAt)
	.addField("Moderator", message.author)
	.addField("User Unblacklisted", userid)
 await mod.send(thing)
	      } else return message.reply("This user is not blacklisted!")
      } else {
	      	      let userob = await bot.fetchUser(pingeduser.id)

      	      let buser = messages.find(m => m.content === pingeduser.id);
	if(buser) { 
		buser.delete()
		message.react("\u2705")
		let mod = bot.channels.find(`id`, "444634075836448768")

 let thing = new Discord.RichEmbed()
	.setTitle("Unblacklisted User")
 .setColor("#FF0000")
 .addField("Time Unblacklisted", message.createdAt)
	.addField("Moderator", message.author)
	.addField("Unblacklisted", userob.tag)
 	.addField("Unblacklisted ID", userob.id)

 await mod.send(thing)
	} else return message.reply("This user is not blacklisted!")
}
	
}

}

module.exports.help = {
	name: "unblacklist"
}
