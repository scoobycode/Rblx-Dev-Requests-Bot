const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
	let helper = new Discord.RichEmbed()
	.setTitle("Commands")
	.addField("report", "Starts a prompt to report a scammer and send that prompt to the RDR server")
	.addField("invite", "Sends you my invite")
	.addField("server", "Sends you the invite to the RDR server")
	.addField("scamcheck", "Tells you whether the username you provided is in our scam database or not.");


	message.react("\u2705")
	message.author.send(helper)
}
module.exports.help = {
	name: "help"
}
