const Discord = require("discord.js");
const rbx = require('roblox-js');

module.exports.run = async (bot, message, args) => {
let guild = bot.guilds.find(`id`, "400508946709872660")
let member = await guild.fetchMember(message.author.id)
if(!member) return;
if (member.roles.get("400523390441619457") //mod
 || member.roles.get("400512010590355458") //admin
 || member.roles.get("415914501909774336") //head admin
 || member.roles.get("400511826745360405") //comanager
 || member.roles.get("400511217061330955")) { //owner 
      let channel = bot.channels.find(`id`, "420745256439513089")
	let userid = args[0]
	let messages = await channel.fetchMessages({ limit: 100 })
	let post = bot.channels.find(`id`, "424812962872819723")

      if(userid) {
	      var errortf
let user = await rbx.getIdFromUsername(args[0]).catch((err) => {
	message.channel.send(user)
	     errortf = true
   		return message.reply(`${err}. If error persists, contact support by doing !server.`);
		      });
	      message.channel.send(user)
	 if (errortf == true) return;
      	      let auser = messages.find(m => m.content === ${user});
	      
	      if(!auser) {
		 	channel.send(`${user}`)
		      post.send(`**${userid}**, https://www.roblox.com/users/${user}/profile`)
		      message.react("\u2705")
		       let mod = bot.channels.find(`id`, "418531258344275978")
 let thing = new Discord.RichEmbed()
	.setTitle("Scammer Added")
 .setColor("#FF0000")
 .addField("Time Added", message.createdAt)
	.addField("Moderator", message.author)
	.addField("User Added", userid)
 await mod.send(thing)
	      } else return message.reply("This user is already in the scammer database!")
     
}
}


}

module.exports.help = {
	name: "addscammer"
}
