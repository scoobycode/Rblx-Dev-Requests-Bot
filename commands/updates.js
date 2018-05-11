const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

let channel = bot.channels.find(`id`, "444588564328742926")
let editor = await channel.fetchMessage("444593973756166155")
let thing = new Discord.RichEmbed()
	.setTitle("Updates")
 .setColor("#FF0000")
 .setDescription(editor.content)
.setFooter(`Requested by ${message.author.tag}`)
 await message.channel.send(thing)

}



module.exports.help = {
	name: "updates"
}
