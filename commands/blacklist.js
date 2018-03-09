const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
	let blacklist = require("../blacklist.json")
	if(message.author.id === "291367352476631040" || message.author.id === "245877990938902529" || message.author.id === "294990053849956354" || message.author.id === "303683211790254080" || message.author.id === "335096822194241537") {
      let channel = bot.channels.find(`id`, "420677482287464448")
      let pingeduser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	let userid = args[0]
	let messages = await channel.fetchMessages()

      if(!pingeduser) {
      	      if(!blacklist[userid]) {
		      let userob = await bot.fetchUser(userid)
			if(!userob) return message.reply("Couldn't find this user!")
			blacklist[userid] = {name: `${userid.username}#${userid.discriminator}`}
		      child_process.exec(fs.writeFile("../blacklist.json", JSON.stringify(blacklist), (err) => {
                        if (err) throw err;
}));
		      message.react("\u2705")
	      }
	      if(blacklist[userid]) return message.reply("This user is already blacklisted!")
      } else {
      	      let darray = messages.filter(m => RegExp(pingeduser.id, "gi").test(m.content));
	      let buser = darray.first();
	if(!blacklist[pingeduser.id]) {
		let userob = await bot.fetchUser(pingeduser.id)
		if(!userob) message.reply("Couldn't find this user!")
		blacklist[userob.id] = {name: `${userob.username}#${userob.discriminator}`}
				child_process.exec(fs.writeFile("../blacklist.json", JSON.stringify(blacklist), (err) => {
                        if (err) throw err;
}));
		 message.react("\u2705")
	} else return message.reply("This user is already blacklisted!")
}

}

}

module.exports.help = {
	name: "blacklist"
}
