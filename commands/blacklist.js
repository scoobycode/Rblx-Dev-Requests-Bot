const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
       let channel = bot.channels.find(`id`, "420677482287464448")
      marray = channel.fetchMessages().filter(m => RegExp(message.author.id, "gi").test(m.startsWith()));
			buser = marray.first();
      
      if(buser) {
      return message.channel.send("blacklisted")
      } else return message.channel.send("not blacklisted")


}

module.exports.help = {
	name: "blacklist"
}
