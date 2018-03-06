const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
       let channel = bot.channels.find(`id`, "420677482287464448")
      let marray = await channel.fetchMessages()
	      let aarray.filter(m => RegExp(message.author.id, "gi").test(m.startsWith()));
			let buser = aarray.first();
      
      if(buser) {
      return message.channel.send("blacklisted")
      } else return message.channel.send("not blacklisted")


}

module.exports.help = {
	name: "blacklist"
}
