const Discord = require("discord.js");
const rbx = require('roblox-js');

module.exports.run = async (bot, message, args) => {
let guild = bot.guilds.find(`id`, "443867131721941005");;
	let member = await guild.fetchMember(message.author.id)
	if (!member) return;
	if (member && member.roles.get("443898332029517824") //helper
 	|| member.roles.get("443903247502147596") //moderator
 	|| member.roles.get("443867603103121410")) { //developer
      let channel = bot.channels.find(`id`, "444588565154889738")
	let userid = args[0]
	let messages = await channel.fetchMessages({ limit: 100 })
	      let post = bot.channels.find(`id`, "443959210817093642")
	let msgs = await post.fetchMessages({ limit: 100 })

      if(userid) {
	    var errortf
let user = await rbx.getIdFromUsername(args[0]).catch((err) => {
	     errortf = true
   		return message.reply(`${err}. If error persists, contact support by doing !server.`);
		      });
	 if (errortf == true) return;
      	      let auser = messages.find(m => m.content === `${user}`);
	      let carray = msgs.filter(m => RegExp(user, "gi").test(m.content));
	      let cuser = carray.first();
	      
	      if(auser) {
		     auser.delete()
		      if(cuser) cuser.delete()
		     message.react("\u2705")
		       let mod = bot.channels.find(`id`, "444634075836448768")
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
