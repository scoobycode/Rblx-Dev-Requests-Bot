const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
      let channel = bot.channels.find(`id`, "420677482287464448")
      let marray = await channel.fetchMessages()
      let aarray = marray.filter(m => RegExp(message.author.id, "gi").test(m.content));
      let buser = aarray.first();
	if(buser) return message.channel.send("This user is already blacklisted!")
      let auser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
		if(!auser) {
			let cuser = args[0]
			return channel.send(cuser)
		}
      channel.send(auser.id)


}

module.exports.help = {
	name: "blacklist"
}
