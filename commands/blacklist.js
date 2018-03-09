const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
	if(message.author.id === "291367352476631040" || message.author.id === "245877990938902529" || message.author.id === "294990053849956354" || message.author.id === "303683211790254080" || message.author.id === "335096822194241537") {
      let pingeduser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	let userid = args[0]

      if(!pingeduser) {
	      let userob = await bot.fetchUser(userid)
	      if(!userob) return message.reply("Couldn't find this user!")
	      let note = userob.note
	      	      if(!note) note = ("-")

	      if(note.includes("BLACKLISTED") === false) {
			if(!userob) return message.reply("Couldn't find this user!")
		      let add = "BLACKLISTED"
		      let newnote = note.concat(add);
		 	await userob.setNote(`newnote`)
		      message.react("\u2705")
	      } else return message.reply("This user is already blacklisted!")
      } else {
      	      let userob = await bot.fetchUser(pingeduser.id)
	      if(!userob) return message.reply("Couldn't find this user!")
	      let note = userob.note
	      	      if(!note) note = ("-")

	      if(note.includes("BLACKLISTED") === false) {
		if(!userob) return message.reply("Couldn't find this user!")
		      let add = "BLACKLISTED"
		      let newnote = note.concat(add);
		 	await userob.setNote(`newnote`)
		      message.react("\u2705")
	} else return message.reply("This user is already blacklisted!")
}
	
}

}

module.exports.help = {
	name: "blacklist"
}
