const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
      let channel = bot.channels.find(`id`, "420677482287464448")
      let pingeduser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	let userid = args[0]
	let messages = await channel.fetchMessages()

      if(!pingeduser) {
      	      let barray = messages.filter(m => RegExp(userid, "gi").test(m.content));
	      let auser = barray.first();
	      if(!auser) {
		      channel.send(userid)
		      message.react("\u2705")
	      }
	      if(auser) return message.channel.send("This user is already blacklisted!")
      } else {
      	      let darray = messages.filter(m => RegExp(pingeduser.id, "gi").test(m.content));
	      let buser = darray.first();
	if(!buser) {
		 channel.send(pingeduser.id)
		 message.react("\u2705")
	}
	if(buser) return message.channel.send("This user is already blacklisted!")
}
	


}

module.exports.help = {
	name: "blacklist"
}
