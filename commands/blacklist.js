const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
	if(message.author.id === "291367352476631040" || message.author.id === "245877990938902529" || message.author.id === "294990053849956354" || message.author.id === "303683211790254080" || message.author.id === "335096822194241537" {
      let channel = bot.channels.find(`id`, "420677482287464448")
      let pingeduser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	let userid = args[0]
	let messages = await channel.fetchMessages()

      if(!pingeduser) {
      	      let barray = messages.filter(m => RegExp(userid, "gi").test(m.content));
	      let auser = barray.first();
	      if(!auser) {
		      let userob = await bot.fetchUser(userid)
			if(!userob) return message.reply("Couldn't find this user!")
		 	channel.send(`${userid}, ${userob.username}#${userob.discriminator}`)
		      message.react("\u2705")
	      }
	      if(auser) return message.reply("This user is already blacklisted!")
      } else {
      	      let darray = messages.filter(m => RegExp(pingeduser.id, "gi").test(m.content));
	      let buser = darray.first();
	if(!buser) {
		let userob = await bot.fetchUser(pingeduser.id)
		if(!userob) message.reply("Couldn't find this user!")
		 channel.send(`${pingeduser.id}, ${userob.username}#${userob.discriminator}`)
		 message.react("\u2705")
	}
	if(buser) return message.reply("This user is already blacklisted!")
}
	
}

}

module.exports.help = {
	name: "blacklist"
}
