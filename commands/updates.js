const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

let channel = bot.channels.find(`id`, "429099957232992256")
let editor = await channel.fetchMessage("429100390206668800")
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
