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
	let msgs = await post.fetchMessages({ limit: 100 })

      if(userid) {
	    var errortf
let user = await rbx.getIdFromUsername(args[0]).catch((err) => {
	     errortf = true
   		return message.reply(`${err}. If error persists, contact support by doing !server.`);
		      });
	 if (errortf == true) return;
      	      let barray = messages.filter(m => RegExp(user, "gi").test(m.content));
	      let auser = barray.first();
	      let carray = msgs.filter(m => RegExp(user, "gi").test(m.content));
	      let cuser = carray.first();
	      
	      if(auser) {
		     auser.delete()
		      if(cuser) cuser.delete()
		     message.react("\u2705")
		       let mod = bot.channels.find(`id`, "418531258344275978")
 let thing = new Discord.RichEmbed()
	.setTitle("Removed Scammer")
 .setColor("#FF0000")
 .addField("Time Removed", message.createdAt)
	.addField("Moderator", message.author)
	.addField("User Removed", userid)
 await mod.send(thing)
	      } else return message.reply("This user is not in the scammers database!")
      
}
}


}

module.exports.help = {
	name: "removescammer"
}
