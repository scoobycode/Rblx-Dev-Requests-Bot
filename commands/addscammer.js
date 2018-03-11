const Discord = require("discord.js");
const rbx = require('roblox-js');

module.exports.run = async (bot, message, args) => {
	if(message.author.id === "291367352476631040" || message.author.id === "245877990938902529" || message.author.id === "294990053849956354" || message.author.id === "303683211790254080" || message.author.id === "335096822194241537") {
      let channel = bot.channels.find(`id`, "420745256439513089")
	let userid = args[0]
	let messages = await channel.fetchMessages()

      if(userid) {
	      let user = await rbx.getIdFromUsername(userid).catch((err) => {
   		 message.reply(`${err}. Could not find this user. If error persists, contact ethanlaj#8805.`);
		      });
      	      let barray = messages.filter(m => RegExp(user, "gi").test(m.content));
	      let auser = barray.first();
	      
	      if(!auser) {
		 	channel.send(`${user}`)
		      message.react("\u2705")
	      }
	      if(auser) return message.reply("This user is already in the scammer database!")
     
}
	
}

}

module.exports.help = {
	name: "addscammer"
}
