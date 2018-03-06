const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
      let channel = bot.channels.find(`id`, "420677482287464448")
      let marray = await channel.fetchMessages()
      let aarray = marray.filter(m => RegExp(message.author.id, "gi").test(m.content));
      let buser = aarray.first();
      let auser = message.guild.member(message.mentions.users.first().id || message.guild.members.get(args[0]).id);
		if(!auser) {
			auser = args[0]
		}
      if(!buser) {
      channel.send(auser)
      } else return message.channel.send("This user is already blacklisted!")


}

module.exports.help = {
	name: "blacklist"
}
