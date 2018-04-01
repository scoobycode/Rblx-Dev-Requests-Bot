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
      let channel = bot.channels.find(`id`, "420677482287464448")
      let pingeduser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	let userid = args[0]
	let messages = await channel.fetchMessages({ limit: 100 })

      if(!pingeduser) {
	      let userob = bot.fetchUser(userid)
      	      let barray = messages.filter(m => RegExp(userid, "gi").test(m.content));
	      let auser = barray.first();
	      if(auser) {
		     auser.delete()
		     message.react("\u2705")
		      let mod = bot.channels.find(`id`, "418531258344275978")

 let thing = new Discord.RichEmbed()
	.setTitle("Unblacklisted User")
 .setColor("#FF0000")
 .addField("Time Unblacklisted", message.createdAt)
	.addField("Moderator", message.author)
	.addField("User Unblacklisted", userid)
 await mod.send(thing)
	      } else return message.reply("This user is not blacklisted!")
      } else {
	      	      let userob = bot.fetchUser(userid)

      	      let darray = messages.filter(m => RegExp(pingeduser.id, "gi").test(m.content));
	      let buser = darray.first();
	if(buser) { 
		buser.delete()
		message.react("\u2705")
		let mod = bot.channels.find(`id`, "418531258344275978")

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
